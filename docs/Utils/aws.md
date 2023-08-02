# aws
## 封装aws
```js
import axios from "axios";
import CryptoJS from  'crypto-js';
import store from "@/store";
function utoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)))
}
export default async function AwsUpdate(file) {
    // 生成一个随机文件名
    let key = uuid() + file.name
    // 获取密钥
    let form = s3_upload_form(
        store.getters.secret_config.pic_secret1,
        store.getters.secret_config.pic_secret2,
        "region", // aws区域 亚太地区(香港) ap-east-1
        'bucketName', // aws桶名
        key
    )

    // 新建一个formdata 对象
    let data = new FormData()
    // 为formdata 对象赋值
    data.append('acl', form['acl'])
    data.append('key', form['key'])
    data.append('policy', form['policy'])
    data.append('success_action_status', form['success_action_status'])
    data.append('x-amz-algorithm', form['x-amz-algorithm'])
    data.append('x-amz-credential', form['x-amz-credential'])
    data.append('x-amz-date', form['x-amz-date'])
    data.append('x-amz-signature', form['x-amz-signature'])
    data.append('file', file)
    try{
        let response  = await axios({
            url: form.action,
            method:'post',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type' : "multipart/form-data",
            },
            onUploadProgress:ProgressEvent => {
              console.log(parseInt( ProgressEvent.loaded / ProgressEvent.total * 100 || 0 ))
            },
            data:data,
            transformRequest: [data => data],
        })
        let url = response.data.match(/<Location>(.*?)<\/Location>/)[1];
        return { code:0, res:decodeURIComponent(url)};
    }catch(err){
        return {code:1,res:err.message};
    }
}
/**
 *
 * @param {*} access_key 密钥
 * @param {*} secret_key key
 * @param {*} region 地区编码
 * @param {*} bucket  存储桶名称。
 * @param {*} key 生成一个随机的uuid拼接文件名
 * @param {*} acl public-read 表单字段值必须与指定的值匹配。
 * @param {*} success_action_status 成功响应状态码
 * @param {*} x-amz-algorithm //签名计算时必须使用的签名算法。对于 AWS 签名版本 4，该值为 AWS4-HMAC-SHA256
 * @param {*} x-amz-credential 用于计算签名的凭据。它提供访问密钥 ID 和范围信息，标识签名对其有效的区域和服务。这应该与您在计算签名计算的签名密钥时使用的范围相同
 * @param {*} x-amz-date ISO8601 格式字符串中指定的日期值。例如，20130728T000000Z。日期必须与您在创建签名计算签名密钥时使用的日期相同。如果请求中包含 POST 策略文档，则这是必需的。
 * @returns  {
 * }
 */
// 上传时需要用的密钥
function s3_upload_form(access_key, secret_key, region, bucket, key) {
    let form = {
        'acl': 'public-read',
        'success_action_status': '201',
        'x-amz-algorithm': 'AWS4-HMAC-SHA256',
        'x-amz-credential': access_key + '/' + getDate() + '/' + region +
        '/s3/aws4_request',
        'x-amz-date': getDate() + 'T000000Z',
    }

    // post 策略
    //参考 https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-HTTPPOSTConstructPolicy.html
    let policy = {
        'conditions': [
            { 'bucket': bucket },
            { 'acl': 'public-read' },
            [ 'content-length-range', 32, 104857600],
            { 'success_action_status': form['success_action_status'] },
            { 'x-amz-algorithm': form['x-amz-algorithm'] },
            { 'x-amz-credential': form['x-amz-credential'] },
            { 'x-amz-date': form['x-amz-date'] },
        ],
        'expiration': getExactDate(),
    }
    form['action'] = 'https://' + bucket + '.s3-' + region + '.amazonaws.com/'
    form['key'] = key

    policy['conditions'].push({ 'key': key })

    // policy 要base64编码
    form['policy'] = utoa(JSON.stringify(policy))
    // x-amz-signature 最重要的签名值
    form['x-amz-signature'] = sign(secret_key, region, 's3', form['policy'])
    return form
}

// 签名函数
function sign(key, region, service, msg) {
    var date = getDate()
    // CryptoJS 提供的HmacSHA256 方法
    // 参考 https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-authentication-HTTPPOST.html
    var kDate = CryptoJS.HmacSHA256(date, 'AWS4' + key)
    var kRegion = CryptoJS.HmacSHA256(region, kDate)
    var kService = CryptoJS.HmacSHA256(service, kRegion)
    var kSigning = CryptoJS.HmacSHA256('aws4_request', kService)
    return CryptoJS.HmacSHA256(msg, kSigning)
}
// 当前日期
function getDate() {
    // 获取当前日期
    let date = new Date()

    let nowYear = date.getFullYear()

    // 获取当前月份
    let nowMonth = date.getMonth() + 1

    // 获取当前是几号
    let nowDate = date.getDate()

    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
        nowMonth = '0' + nowMonth
    }

    // 对月份进行处理，1-9号在前面添加一个“0”
    if (nowDate >= 0 && nowDate <= 9) {
        nowDate = '0' + nowDate
    }
    return String(nowYear) + String(nowMonth) + String(nowDate)
}

// 生成一个随机的uuid
function uuid() {

    let s = []

    let hexDigits = '0123456789abcdef'

    for (let i = 0; i < 36; i++) {

        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)

    }

    s[14] = '4'  // bits 12-15 of the time_hi_and_version field to 0010

    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)  // bits 6-7 of the clock_seq_hi_and_reserved to 01

    s[8] = s[13] = s[18] = s[23] = '-'

    let uuid = s.join('')

    return uuid

}

// 当前时间,精确到秒
function getExactDate() {
    let date = new Date()
    date.setTime(date.getTime() + 30 * 60 * 1000)

    let nowYear = date.getFullYear()

    // 获取当前月份
    let nowMonth = date.getMonth() + 1

    // 获取当前是几号
    let nowDate = date.getDate()

    let hour = date.getHours()//得到小时
    let minu = date.getMinutes()//得到分钟
    let sec = date.getSeconds()//得到秒
    if (hour < 10) hour = '0' + hour
    if (minu < 10) minu = '0' + minu
    if (sec < 10) sec = '0' + sec

    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
        nowMonth = '0' + nowMonth
    }

    // 对月份进行处理，1-9号在前面添加一个“0”
    if (nowDate >= 0 && nowDate <= 9) {
        nowDate = '0' + nowDate
    }
    return nowYear + '-' + nowMonth + '-' + nowDate + 'T' + hour + ':' + minu +
        ':' + sec + 'Z'


}

```
## 引用
- https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-HTTPPOSTConstructPolicy.html
- https://docs.aws.amazon.com/zh_cn/AmazonS3/latest/API/sigv4-HTTPPOSTForms.html
