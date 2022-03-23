## Available Scripts

### `npm start`

启动本地开发服务并打开 **http://localhost:3000**

### `npm run build`

打包项目

### `npm run eject`

弹出配置目录 ( 单向操作 )

## Learn More

### `React官方文档`

中文：**https://react.docschina.org/docs/getting-started.html**

英文：**https://reactjs.org/docs/getting-started.html**


### 技术描述
> 此项目主要用于练习 React + TS + Hooks + Egg
1. 样式：CssModule
2. 语法：TSX
3. 状态：【redux】（持久化 + Provide + connect）
4. 路由：【react-router】（封装RouterView）
5. 请求：【axios】（封装请求实例）
6. 服务：【egg】

### JS-DOC 常用块标签
|BlockTag|含义|语法|别名|
|:-|:-|:-|:-|
|@author|指定项目的作者|`@author <name> [<emailAddress>]`||
|@version|描述版本信息|||
|@copyright|描述一些版权信息|`@copyright <some copyright text>`||
|@callback|描述一个回调函数|`@callback <namepath>`||
|@class|此函数旨在需要使用"new"关键字调用，即构造函数|`@class [<type> <name>]`|@constructor|
|@classdesc|使用后面的文字来描述整个类|`@classdesc <some description>`||
|@constant|指明这个对象是一个常量|`@constant [<type> <name>]`|@const|
|@default|记录默认值|`@default [<some value>]`|@defaultvalue|
|@description|描述一个标识|`@description <some description>`|@desc|
|@enum|描述一个相关属性的集合|`@enum [<type>]`||
|@event|描述一个事件|`@event <className>#[event:]<eventName>`||
|@example|提供一个如何使用描述项的例子|||
|@exports|标识一个由JavaScript模块导出的成员|`@exports <moduleName>`||
|@file|描述一个文件||@fileoverview，@overview|
|@function|描述一个函数或方法|`@function [<FunctionName>]`|@func，@method|
|@global|记录一个全局对象|||
|@ignore|忽略文档中的一个标识|||
|@interface|这是别人可以实现的一个接口|`@interface [<name>]`||
|@license|标识你的代码采用何种软件许可协议|`@license <identifier>`||
|@listens|列出一个标识的监听事件|`@listens <eventName>`||
|@module|记录一个 JavaScript 模块|`@module [[{<type>}] <moduleName>]`||
|@name|记录一个对象的名称|`@name <namePath>`||
|@namespace|记录一个命名空间对象|`@namespace [{<type>}] <SomeName>]`||
|@param|记录传递给一个函数的参数||@arg，@argument|
|@private|标记为私有|`@private [{typeExpression}]`||
|@property|记录一个对象的属性||@prop|
|@readonly|记录数据为只读|||
|@returns|记录一个函数的返回值||@return|
|@see|更多详细信息请参阅其他一些文档|`@see <namepath>`，`@see <text>`||
|@this|this关键字的指向|`@this <namePath>`||
|@todo|记录一个将要完成的任务|`@todo text describing thing to do`||

### ToDo
1. redux插件生态完善 + 语法改造
2. Hooks引入使用
3. API封装
4. Egg服务 + 接口联调