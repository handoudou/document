# react Native 项目总结

## 项目架构搭建

下面架构跟随项目，具体项目具体修改使用。

![](./assets/react native.003.jpeg)
![](./assets/react native.004.jpeg)
![](./assets/react native.005.jpeg)

![](./assets/react native.006.jpeg)

## 项目开发

### 导航使用 react-navigation

导航封装，导航配置等

### mobx 使用

注意使用的 store 是否是单例模式（new 对象的位置）

### serve 封装

1. 请求服务端 http 请求 fetch 封装
2. 支持 mock 模式（不建议使用，会影响打包产物大小而且使用比较麻烦）
3. 封装 service 模块，支持缓存逻辑和多次回调。（缓存谨慎使用，项目未使用）

### RN 调用 NA 事件

采用单一模块，不同参数使用。前端封装 rnBridge 模块处理逻辑

### NA 向 JS 发送事件

1. RN 订阅事件
2. RN 监听移除

注意事项：

1. 注意页面切换，事件仍然存在。需要谨慎使用。

2. iOS，android 事件封装不一致

3. 前端封装 rnEvent 模块统一处理

待完成：

1. 指定事件 id 触发
2. 当前激活页面事件触发
3. RN 内部事件广播封装

### RN 调用原生模块

只有 demo，实际项目未使用

## 注意事项

1. 图片资源需要@2x，@3x
2. 使用 RN 提供组件或者自定义组件，注意两端兼容
3. 注意事件注册和销毁

## 帮助说明

- [react-native](http://reactnative.cn/docs/0.49/getting-started.html)

- [reactnavigation](https://reactnavigation.org/)

- [mobx](https://mobx.js.org/getting-started.html) [mobx 说明](http://cn.mobx.js.org/)

- [prettier](https://prettier.io/)
