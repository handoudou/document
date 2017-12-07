# 通用后台&组件库搭建

## 技术栈

* 打包模块webpack/fis。目前主要使用webpack
* 前端基础框架：vue
* css扩展：less

## 开发模式
 - 组件库开发采用github+npm的形式进行开发。代码仓库托管到github，左右的相关依赖和各个组件开发完成后发布到npm，使用方使用npm安装使用
 - 仓库：[npm组件列表](https://www.npmjs.com/search?q=pcadmin)    [前端github仓库](https://github.com/ksc-fx)


## 开发规则
 - pcadmin：后台管理系统框架，作为后台展示和组件集合展示的平台
 - pcadmin-base：css和js基础依赖，所有组件需要npm使用该模块
 - pcadmin-*：各个分离的组件，组件之间相互不影响
 - style-guides：前端代码规范


## 参考
[https://buefy.github.io/](https://buefy.github.io/)    [http://bulma.io/](http://bulma.io/)

## 已实现
* 样式布局架构，代码组织架构，所需基础能力
* 使用命令行生成项目架构（后台，单个组件）
* 本地开发实时预览，eslint集成，vue、vue-router、vue-resource等集成，md显示预览
* 组件开发、预览、发布、使用。组件demo展示


