module.exports = [
  {
    text: '指南',
    link: '/guide.md',
  },
  {
    text: '前端基础',
    children: [
      {
        text: 'HTML',
        children: [
          '/HTML/html和css的技巧.md',
          '/HTML/前端常见布局.md',
        ],
      },
      {
        text: 'CSS',
        children: [
          '/CSS/权威分析浏览器视口.md',
          '/CSS/组件动画实现.md',
        ],
      },
    ],
  },
  {
    text: 'Javascript',
    children: [
      {
        text: 'JS',
        children: [
          '/JS/基础中间件实现.md',
          '/JS/理解JS函数节流和函数防抖.md',
          '/JS/线程和进程的区别是什么.md',
          '/JS/fetch使用的常见问题及其解决办法.md',
          '/JS/RAF替代setTimeout_setInterval.md',
          '/JS/分享好用的js方法.md',
          '/JS/原生js复制粘贴剪切.md',
          '/JS/微任务_宏任务与Event-Loop.md',
        ]
      },
      {
        text: 'Api',
        children: [
          '/JS/Api/IntersectionObserver.md',
        ]
      },
      {
        text: '新特性',
        children: [
          '/JS/newFeatures/ES7-Decorator-装饰者模式.md',
          '/JS/newFeatures/Iterator-Generate.md',
          '/JS/newFeatures/set和map.md',
          '/JS/newFeatures/新特性proxy-管道操作符.md',
        ]
      },
      {
        text: 'socket',
        children: [
          '/JS/socket/js实现webSocket客户端.md',
          '/JS/socket/SSE服务端推送.md',
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
      {
        text: '正则表达式',
        children: [
          '/RegExp/正则应用(总结).md',
          '/RegExp/前端表单验证常用的正则表达式.md',
          '/RegExp/常用正则整理.md',
          '/RegExp/先行断言和后行断言.md',
        ],
      },
    ]
  },
  {
    text: '前端框架',
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
    text: '前端周边',
    children: [
      {
        text: 'Webpack',
        children: [
          '/Webpack/loader.md',
          '/Webpack/plugin.md',
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
        text: 'ThreeJs',
        children: [
          '/Threejs/threejs基本使用.md',
        ],
      },
      {
        text: '面试',
        children: [
          '/Interview/面试基础.md',
        ],
      },
    ],
  },
  {
    text: '代码癖好',
    children: [
      {
        text: '代码规范',
        children: [
          '/CodeHobby/代码整洁之道.md',
          '/CodeHobby/自我总结代码规范.md',
          '/CodeHobby/少写if-else.md',
        ],
      },
      {
        text: '性能优化',
        children: [
          '/CodeHobby/前端性能优化.md',
          '/CodeHobby/十大经典排序算法和使用场景.md',
        ],
      },
    ],
  },
  {
    text: '前端工具类',
    children: [
      {
        text: '有趣技巧网站',
        children: [
          '/Utils/Interesting/前端有趣技巧网站.md',
        ],
      },
      {
        text: 'Babel',
        children: [
          '/Utils/Babel/babel插件开发.md',
        ],
      },
      {
        text: 'Git',
        children: [
          '/Utils/Git/git历史和原理.md',
          '/Utils/Git/你想要的git都有.md',
        ],
      },
      {
        text: 'Github',
        children: [
          '/Utils/Github/解决github速度访问过慢.md',
          '/Utils/Github/github_api.md',
          '/Utils/Github/github自动同步gitee.md',
          '/Utils/Github/github免费cdn.md',
        ],
      },
      {
        text: 'Mac',
        children: [
          '/Utils/Mac/mac使用.md',
          '/Utils/Mac/homebrew使用.md',
        ],
      },
      {
        text: 'Linux',
        children: [
          '/Utils/Linux/ssh是什么.md',
          '/Utils/Linux/linux常用操作.md',
          '/Utils/Linux/shell简单脚本.md',
          '/Utils/Linux/vim使用.md',
        ],
      },
      {
        text: 'Node',
        children: [
          '/Utils/Node/node版本切换.md',
          '/Utils/Node/npm和npx使用指南.md',
          '/Utils/Node/npm发布包一些注意事项和流程.md',
          '/Utils/Node/调试node.md',
        ],
      },
      {
        text: '其他工具',
        children: [
          '/Utils/chrome插件开发.md',
          '/Utils/自搭梯子.md',
          '/Utils/nginx使用.md',
          '/Utils/postman中form-data等的区别.md',
          '/Utils/webstorm-技巧.md',
          '/Utils/使用PS批量修改图片大小.md',
          '/Utils/用docker部署一个项目.md',
          '/Utils/社区热门工具.md',
        ],
      },
    ],
  },
  {
    text: '了解更多',
    children: [
      {
        text: '更新日志',
        link: 'https://github.com/Weibozzz/Weibozzz.github.io/commits/master',
      },
      {
        text: 'React SSR博客',
        link: 'http://www.liuweibo.cn',
      },
      {
        text: '个人常用工具库',
        link: 'https://github.com/Weibozzz/weibozzz-utils',
      },
      {
        text: '静态网站生成器',
        link: 'https://v2.vuepress.vuejs.org/zh/',
      },
      {
        text: '萌萌哒看板娘',
        link: 'https://github.com/stevenjoezhang/live2d-widget',
      },
    ],
  },
]
