# threejs基本使用
## 基本结构
- 场景
- 几何体
- 材料
- 灯光
  - 环境光
  - 方向光
- 照相机
- 渲染器
- 控制器
## 基本完整示范
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="description" content="3D-video">
  <title>3D-video</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body>

<script type="module">
  import * as THREE from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/build/three.module.js'
  import { OrbitControls } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/controls/OrbitControls.js'
  import Stats from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/libs/stats.module.js'
  import { GUI } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/libs/dat.gui.module.js'
  let url = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/'
  let spotLight,
    scene,
    analyser,
    audio,
    renderer,
    camera,
    gui,
    geom,
    stats,
    startButton,
    capMeshMaterial,
    cubeMeshMaterial,
    controls,
    text1,
    text2,
    clock
  const width = window.innerWidth //窗口宽度
  const height = window.innerHeight //窗口高度
  class Visualizer {
    constructor () {
    }
    init () {
      scene = new THREE.Scene()
      // 插入灯光
      this.light()
      // 插入辅助线
      this.helper()
      // 放入相机
      this.camera()
      this.createMesh()
      // 开始渲染
      this.renderer()
      // 加入鼠标控制
      this.controls()
      // 开始循环
      this.renderAnimation()
      // gui 面板
      this.buildGui()
      // 刷新频率
      this.initStats()
      window.addEventListener('resize', onWindowResize)
    }
    createMesh () {
      //添加立方体
      const geometry = new THREE.BoxBufferGeometry(50, 50, 50)
      const material = new THREE.MeshLambertMaterial({ color: '#0f0' })
      scene.add(new THREE.Mesh(geometry, material))
    }
    light () {
      const point = new THREE.PointLight(0xffffff);
      point.position.set(400, 200, 300); //点光源位置
      scene.add(point); //点光源添加到场景中
      //环境光
      const ambient = new THREE.AmbientLight(0x444444);
      scene.add(ambient);
    }
    helper () {
      // const spotLightHelper = new THREE.SpotLightHelper(spotLight)
      const AxesHelper = new THREE.AxesHelper(50)
      scene.add(AxesHelper)
      // scene.add(spotLightHelper)
    }
    /**
     * 相机设置
     */
    camera () {
      const k = width / height //窗口宽高比
      const s = 150 //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
      camera.position.x = 0
      camera.position.y = 200
      camera.position.z = 500
      camera.lookAt(scene.position) //设置相机方向(指向的场景对象)
    }
    /**
     * 创建渲染器对象
     */
    renderer () {
      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(width, height) //设置渲染区域尺寸
      renderer.setClearColor('#000000', 1) //设置背景颜色
      document.body.appendChild(renderer.domElement) //body元素中插入canvas对象
    }
    controls () {
      //创建控件对象  相机对象camera作为参数   控件可以监听鼠标的变化，改变相机对象的属性
      controls = new OrbitControls(camera, renderer.domElement)
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      controls.enableDamping = true
      //动态阻尼系数 就是鼠标拖拽旋转灵敏度
      //controls.dampingFactor = 0.25;
      //是否可以缩放
      controls.enableZoom = true
      //是否自动旋转
      controls.autoRotate = false
      //设置相机距离原点的最远距离
      controls.minDistance = 20
      //设置相机距离原点的最远距离
      controls.maxDistance = 10000
      //是否开启右键拖拽
      controls.enablePan = true
      controls.addEventListener('change', this.render)
    }
    renderAnimation () {
      this.render()
      requestAnimationFrame(this.renderAnimation.bind(this))
    }
    render () {
      renderer.render(scene, camera) //执行渲染操作
      stats && stats.update()
    }
    buildGui () {
      new GUI()
    }
    initStats () {
      stats = new Stats()
      document.body.appendChild(stats.domElement)
    }
  }
  const visualizer = new Visualizer()
  visualizer.init()

  function onWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    visualizer.render()
  }
</script>
</body>
</html>

```
## 加载外部模型
### 官方文档加载器
- [FileLoader](https://threejs.org/docs/index.html#api/zh/loaders/FileLoader)
- [TextureLoader](https://threejs.org/docs/index.html#api/zh/loaders/TextureLoader)
### 官方示例加载器
> 官方github例子下面 js/loaders 列举了很多，可用 cdn 引入即可

```js
const url = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/'
```

- [OBJLoader](https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/OBJLoader.js)
- STLLoader
- GLTFLoader
- MTLLoader
- TTFLoader
## 学习
- https://gitee.com/Weibozzz/threejs (未开放)
## 自己瞎写的demo
- https://weibozzz.github.io/study-demos/threejs-demo/lines.html
- https://weibozzz.github.io/study-demos/threejs-demo/audio-view.html

## 文档
- [官方文档](https://threejs.org/docs/index.html#manual/zh/introduction/Installation)
- [官方案例](https://threejs.org/examples/#webgl_animation_cloth)
- [一些案例](https://www.wjceo.com/blog/threejs/)
