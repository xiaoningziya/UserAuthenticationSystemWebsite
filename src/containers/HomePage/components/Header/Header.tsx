import * as React from 'react'
import { Button } from 'antd'

/** @method [自定义Hook] */
function useLoading() {
  const [isLoading, setState] = React.useState(false)
  const load = (aPromise: Promise<any>) => {
    setState(true)
    return aPromise.then(() => setState(false))
  }
  // 实际需要: [boolean, typeof load] 类型
  // 而不是自动推导的：(boolean | typeof load)[]
  return [isLoading, load] as const
}

const Header: React.FC = () => {
  /** @method [useState<T>] 创建可响应变量 有赋值会自动推导类型 */
  const [user] = React.useState({ name: 'sj', age: 32 })
  const [arr] = React.useState(['One', 'Two'])
  
  /** 常规用法，useState的第二个参数是赋值的方法 */
  const [val, toggle] = React.useState(false)

  /** 此处缺少初始值时，需要显示地声明类型 */
  type Person = {
    name: string
    age: number
  }
  const [person, setPerson] = React.useState<Person | null>(null)
  
  /** @method [useCallback<T>] 创建可调用的方法 , 可以直接从它们返回的值中推断出它们的类型 */
  // useCallback 的参数必须制定类型，否则 ts 不会报错，默认指定为 any
  // 同时也支持传入泛型，useCallback 的泛型指定了参数类型
  const showUser = React.useCallback((obj: typeof user)=>{
    return `名字：${obj.name}，年龄：${obj.age}`
  },[])
  const handleChange = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(evt => {
    console.log(evt.target.value)
  }, [])

  /** @method [useMemo<T>] 创建可调用的方法 , 可以直接从它们返回的值中推断出它们的类型 */
  // 同时也支持传入泛型， useMemo 的泛型指定了返回值类型
  const value = 10
  const result = React.useMemo(() => value * 2, [value])
  const results = React.useMemo<number>(() => 2, [])

  /** @method [useRef<T>] 创建绑定Dom元素的变量 */
  /** 当初始值为 null 时，有两种创建方式 */
  const ref1 = React.useRef<HTMLInputElement>(null)
  // const ref1 = React.useRef<HTMLInputElement | null>(null)
  // const ref1 = React.useRef<HTMLDivElement>(null!) // 在某种情况下，可以省去类型检查，通过添加 ! 断言，不推荐
  /** 【ref使用的两种场景】
   * 第一种方式的 ref1.current 是只读的（read-only），并且可以传递给内置的 ref 属性，绑定 DOM 元素 ；
   * 第二种方式的 ref2.current 是可变的（类似于声明类的成员变量）【作为变量使用与useState有些像，但是useState是异步 useRef是同步 】
   */
  const onButtonClick1 = () => {
    ref1.current?.focus()
  }
  const ref2 = React.useRef(0)
  React.useEffect(() => {
    ref2.current += 1
  }, [person])

  /** @method [useEffect<T>] 副作用方法，可以用于监听某个变量然后做逻辑回调 */
  // 需要注意回调函数的返回值只能是函数或者 undefined
  React.useEffect(() => { // 无返回值
  }, [])
  React.useEffect(() => {
    return () => {} // 返回值是一个函数
  }, [])
  
  return (<div style={{width:'100%', height:'30%', background:'rgba(0,0,0,.3)',marginTop:'10px'}}>
    {String(val)}<Button onClick={()=>{toggle(!val)}}>切换变量</Button><br /><br />
    <Button>{showUser(user)}</Button><br /><br />
    {JSON.stringify(person)}<Button onClick={()=>{setPerson({name: 'zs',age: 20})}}>为person赋值</Button><br /><br />
    <Button ref={ref1}>ref1</Button><Button onClick={()=>{onButtonClick1()}}>JS控制Ref聚焦</Button><br /><br />
    <Button>{ref2.current}</Button><br /><br />
    <Button></Button><br /><br />
    
    
  </div>)
}

export default Header