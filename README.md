# development-documentation-template

一套美观、简单、可配置的项目开发文档静态模板

### 项目代码结构说明
```
config                          
  |--config.json            // 配置文件(可定义网页标题、favicon图标、页面上边框样式、logo、导航菜单样式、copyright等)
css
  |--global.css             // 样式文件
html
  |--addCategory.md         // 新增商品分类接口文件(markdown文件格式)
  |--addProduct.md          // 新增商品接口文件(markdown文件格式)
  |--getMemberInfo.md       // 获取会员信息接口文件(markdown文件格式)
  |--register.md            // 会员注册接口文件(markdown文件格式)
image
  |--favicon.ico            // 网页的favicon图标文件
  |--logo.png               // logo图片文件
js
  |--index.js               // 用来初始化页面数据以及js特效
  |--jquery-1.12.2.min.js   // jquery文件
  |--markdown.js            // 用来解析markdown语法
效果图
  |--snapshot1.png          // 效果截图1
  |--snapshot2.png          // 效果截图2
README.md                   
index.html                  // 首页(主入口文件)
```

### License
The MIT License (MIT). Please see License File for more information.
