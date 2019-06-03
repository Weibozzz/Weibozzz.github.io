# postman中 form-data、x-www-form-urlencoded、raw、binary的区别

## form-data:
 就是`http`请求中的`multipart/form-data`,它会将表单的数据处理为一条消息，以标签为单元，用分隔符分开。既可以上传键值对，也可以上传文件。当上传的字段是文件时，会有`Content-Type`来表名文件类型；`content-disposition`，用来说明字段的一些信息；

由于有`boundary`(边界)隔离，所以`multipart/form-data`既可以上传文件，也可以上传键值对，它采用了键值对的方式，所以可以上传多个文件。

## x-www-form-urlencoded

就是`application/x-www-from-urlencoded`,会将表单内的数据转换为键值对，比如,`name=java&age = 23`

## raw

可以上传任意格式的文本，可以上传`text、json、xml、html`等

## binary

相当于`Content-Type:application/octet-stream`,从字面意思得知，只可以上传二进制数据，通常用来上传文件，由于没有键值，所以，一次只能上传一个文件。

## multipart/form-data与x-www-form-urlencoded区别

`multipart/form-data`：既可以上传文件等二进制数据，也可以上传表单键值对，只是最后会转化为一条信息；

`x-www-form-urlencoded`：只能上传键值对，并且键值对都是间隔分开的。

## 来个美图
![http://pd96wjt4m.bkt.clouddn.com/image/common/gaoyaunyaun_1536580019000_117916_1536580056783.jpg](http://pd96wjt4m.bkt.clouddn.com/image/common/gaoyaunyaun_1536580019000_117916_1536580056783.jpg)

