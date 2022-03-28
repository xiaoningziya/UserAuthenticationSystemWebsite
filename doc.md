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