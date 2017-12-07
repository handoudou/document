# 视频直播

该项目用来支持APP H5, 移动端H5等公共模块。

## 项目架构

### 技术栈

* 搭建nodeserver，采用[thinkjs](https://thinkjs.org/) 2.2.x版本

* 打包工具使用[fis3](http://fis.baidu.com/fis3/docs/beginning/release.html)

* 前端mvc使用[vue](https://cn.vuejs.org/v2/guide/)架构

* 使用[vue router](https://router.vuejs.org/zh-cn/ "vue router")，[vue resource](https://github.com/pagekit/vue-resource)

* 部分动画使用[animate.css](https://daneden.github.io/animate.css/)。部分大礼物动画使用[airbnb/lottie-web](https://github.com/airbnb/lottie-web)

* 统计使用百度统计和内部统计

项目架构

1：搭建nodeserver，采用[thinkjs](https://thinkjs.org/) 2.2.x版本。该模块主要作为前端的server层级，封装globalConfig

