## 1. 使用 Type 还是 Interface？
有几种常用规则：
- 在定义公共 API 时(比如编辑一个库）使用 interface，这样可以方便使用者继承接口
- 在定义组件属性（Props）和状态（State）时，建议使用 type，因为 type的约束性更强

interface 和 type 在 ts 中是两个不同的概念，但在 React 大部分使用的 case 中，interface 和 type 可以达到相同的功能效果，type 和 interface 最大的区别是：
- type 类型不能二次编辑，而 interface 可以随时扩展

## 2. 获取未导出的 Type
某些场景下我们在引入第三方的库时会发现想要使用的组件并没有导出我们需要的组件参数类型或者返回值类型，这时候我们可以通过 ComponentProps/ ReturnType 来获取到想要的类型。
```
// 获取参数类型
import { Button } from 'library' // 但是未导出props type
type ButtonProps = React.ComponentProps<typeof Button> // 获取props
type AlertButtonProps = Omit<ButtonProps, 'onClick'> // 去除onClick
const AlertButton: React.FC<AlertButtonProps> = props => (
  <Button onClick={() => alert('hello')} {...props} />
)

// 获取返回值类型
function foo() {
  return { baz: 1 }
}
type FooReturn = ReturnType<typeof foo> // { baz: number }
```

## 3. 常用的操作符，常用于类型判断
- `typeof` and `instanceof`: 用于类型区分
- `keyof`: 获取 object 的 key
- `O[K]`: 属性查找
- `[K in O]`: 映射类型
- `+` and `-` and `readonly` and `?:` 加法、减法、只读和可选修饰符
- `x ? Y : Z`: 用于泛型类型、类型别名、函数参数类型的条件类型
- `!`: 可空类型的空断言
- `as`: 类型断言
- `is`: 函数返回类型的类型保护

## 4. Event 事件对象类型
- ClipboardEvent<T = Element> 剪切板事件对象

- DragEvent<T =Element> 拖拽事件对象

- ChangeEvent<T = Element> Change 事件对象

- KeyboardEvent<T = Element> 键盘事件对象

- MouseEvent<T = Element> 鼠标事件对象

- TouchEvent<T = Element> 触摸事件对象

- WheelEvent<T = Element> 滚轮时间对象

- AnimationEvent<T = Element> 动画事件对象

- TransitionEvent<T = Element> 过渡事件对象

## 5. 什么时候使用泛型
当你的函数，接口或者类：
- 需要作用到很多类型的时候
- 需要被用到很多地方的时候，比如常用的工具泛型 Partial

## 6. react的useCallback和useMemo的区别
> seMemo 和 useCallback 接收的参数都是一样,第一个参数为回调 第二个参数为要依赖的数据
- 共同作用：
  - 仅仅 依赖数据 发生变化, 才会重新计算结果，也就是起到缓存的作用。

- 两者区别：
  - useMemo 计算结果是 return 回来的值, 主要用于 缓存计算结果的值 ，应用场景如： 需要 计算的状态
  - useCallback 计算结果是 函数, 主要用于 缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个 state 的变化 整个组件 都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。

注意： `不要滥用会造成性能浪费，react中减少render就能提高性能，所以这个仅仅只针对缓存能减少重复渲染时使用和缓存计算结果`


## JS-DOC 常用块标签
|BlockTag|含义|语法|别名|
|:-|:-|:-|:-|
|@author|指定项目的作者|`@author <name> [<emailAddress>]`||
|@version|描述版本信息|||
|@copyright|描述一些版权信息|`@copyright <some copyright text>`||
|@callback|描述一个回调函数|`@callback <namepath>`||
|@type|描述一个类型|@type{type}||
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