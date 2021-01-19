// vue.config.js
module.exports = {
  // 基本路径
  publicPath: '/',
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
  // build输出目录。默认dist
  outputDir: 'dist',
  // 静态资源文件放置目录
  assetsDir: 'static',
  // html输出文件
  indexPath: 'index.html',
  // 文件名哈希
  filenameHashing: true,
  // 多页面配置
  pages: {
    index: 'src/main.js'
  },
  // 保存时eslint-loader检查
  lintOnSave: false,
  devServer: {
    open: false, //浏览器自动打开页面
    host: "0.0.0.0", //如果是真机测试，就使用这个IP
    port: 8881,
    https: false,
    hotOnly: false, //热更新（webpack已实现了，这里false即可）
    proxy: {
      //配置跨域
      '/api': {
        target: "http://192.168.1.1:8086",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
  crossorigin: undefined,
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
  integrity: false,

  // -----------------------------------------------------------------------------------------------
  // Webpack相关配置

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}