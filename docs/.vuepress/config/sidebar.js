module.exports = [
  {
    text: 'HTML/CSS',
    children: [
      '/HTML/html和css的技巧.md',
      '/HTML/前端常见布局.md',
      '/CSS/权威分析浏览器视口.md',
    ],
  },
  {
    text: 'JS',
    children: [
      {
        text: '新特性',
        children: [
          '/JS/ES7-Decorator-装饰者模式.md',
          '/JS/Iterator-Generate.md',
          '/JS/set和map.md',
          '/JS/新特性proxy-管道操作符.md',
        ]
      },
      {
        text: 'socket',
        children: [
          '/JS/js实现webSocket客户端.md',
          '/JS/SSE服务端推送.md',
        ]
      },
      {
        text: '深入浅出',
        children: [
          '/JS/函数记忆.md',
          '/JS/深浅拷贝.md',
          '/JS/bind和new的模拟实现.md',
          '/JS/call和apply的模拟实现.md',
          '/JS/继承的多种方式和优缺点.md',
        ]
      },
      '/JS/fetch使用的常见问题及其解决办法.md',
      '/JS/RAF替代setTimeout_setInterval.md',
      '/JS/分享好用的js方法.md',
      '/JS/原生js复制粘贴剪切.md',
      '/JS/微任务_宏任务与Event-Loop.md',
    ],
  },
  {
    text: 'React/Redux/Vue',
    children: [
      {
        text: 'React',
        children: [
          '/React/10分钟了解react新特性hooks.md',
          '/React/hooks之memo和useCallback.md',
          '/React/useRequest封装.md',
          '/React/从零搭建React全家桶框架教程.md',
          '/React/权限管理.md',
        ],
      },
      {
        text: 'Redux',
        children: [
          '/Redux/redux源码细读compose.md',
          '/Redux/从零实现一个redux.md',
        ]
      },
      {
        text: 'Vue',
        children: [
          '/Vue/vue-配置按需加载.md',
          '/Vue/vue你应该知道的知识点.md',
        ]
      }
    ],
  },
  {
    text: 'Webpack',
    children: [
      '/Webpack/loader.md',
      '/Webpack/plugin.md',
    ],
  },
  {
    text: '性能优化',
    children: [
      '/性能优化/前端性能优化.md',
      '/性能优化/十大经典排序算法和使用场景.md',
    ],
  },
  {
    text: '正则表达式',
    children: [
      '/正则表达式/正则应用(总结).md',
      '/正则表达式/前端表单验证常用的正则表达式.md',
      '/正则表达式/常用正则整理.md',
      '/正则表达式/先行断言和后行断言.md',
    ],
  },
  {
    text: '代码规范',
    children: [
      '/代码规范/代码整洁之道.md',
      '/代码规范/自我总结代码规范.md',
      '/前端技巧/少写if-else.md',
      '/前端技巧/前端有趣技巧网站.md',
    ],
  },
  {
    text: 'HTTP',
    children: [
      '/HTTP/HTTP协议.md',
      '/HTTP/url长度的误区.md',
    ],
  },
  {
    text: '工具',
    children: [
      {
        text: 'js',
        children: [
          '/工具/理解JS函数节流和函数防抖.md',
          '/工具/babel插件开发.md',
          '/其他/线程和进程的区别是什么.md',
        ],
      },
      {
        text: 'git',
        children: [
          '/工具/git历史和原理.md',
          '/工具/你想要的git都有.md',
        ],
      },
      {
        text: 'github',
        children: [
          '/其他/解决github速度访问过慢.md',
          '/其他/github_api.md',
          '/其他/github自动同步gitee.md',
          '/其他/github免费cdn.md',
        ],
      },
      {
        text: 'mac工具',
        children: [
          '/工具/mac使用.md',
          '/工具/homebrew使用.md',
        ],
      },
      {
        text: 'linux',
        children: [
          '/其他/ssh是什么.md',
          '/其他/linux常用操作.md',
          '/工具/shell简单脚本.md',
          '/工具/vim使用.md',
        ],
      },
      {
        text: 'node',
        children: [
          '/工具/node版本切换.md',
          '/工具/npm和npx使用指南.md',
          '/其他/npm发布包一些注意事项和流程.md',
          '/工具/调试node.md',
        ],
      },
      '/工具/自搭梯子.md',
      '/工具/nginx使用.md',
      '/工具/postman中form-data等的区别.md',
      '/工具/webstorm-技巧.md',
      '/工具/使用PS批量修改图片大小.md',
      '/工具/用docker部署一个项目.md',
      '/工具/社区热门工具.md',
    ],
  },
  {
    text: '面试',
    children: [
      '/面试/面试基础.md',
    ],
  },
]
