import * as React from 'react'
import { Button } from 'antd'
const AppContext = React.createContext({});

const Counter = () => {
  /** @method [useContext<T>] 共享状态钩子,实现生产消费模式，类似vue3的 provide + inject */
  const { name, age } = React.useContext(AppContext) as any;
  return (<div>
      Counter -- {name} -- {age}
    </div>)
}

const myReducer = (state: any, action: any)=> {
  switch(action.type) {
    case('COUNT_UP'):
      return {...state, count: state.count+1}
    default:
      return state
  }
}

const MyPage = ()=> {
  /** @method [useReducer<T>] action钩子，用来引入 Reducer 功能 */
  /** @param {参数1, 参数2} 参数1是Reducer方法，参数2是初始化数据 */
  /** @returns {[返回1, 返回2]} 返回一个数组。数组的第一个成员是状态的当前值，第二个成员是发送 action 的dispatch函数。 */
  /** @description 由于Hooks可以提供共享状态和Reducer函数，所以它在这些方面可以取代Redux。但它没法提供中间件（middleware）和时间旅行（time travel），如果你需要这两个功能，还是要用 Redux */
  const [state, dispatch] = React.useReducer(myReducer, {count: 0})
  return (<div>
    <Button>Count: {state.count}</Button>
    <Button onClick={() => dispatch({ type: 'COUNT_UP' })}>
      +1
    </Button>
  </div>)
}

const Header: React.FC = () => {


  /** @method [useState<T>] 状态钩子，创建可响应变量,使函数组件具有使用状态的能力，有赋值会自动推导类型 */
  /** @returns {[参数1, 参数2]} useState方法会返回一个数组；参数1是变量名；参数2是更新变量的方法，命名约定set开头*/
  const [user, setUser] = React.useState({ name: 'sj', age: 32 })
  const [arr] = React.useState(['One', 'Two'])
  const [val, toggle] = React.useState(false)
  /** 此处缺少初始值时，需要显示地声明类型 */
  type Person = {
    name: string
    age: number
  }
  const [person, setPerson] = React.useState<Person | null>(null)


  /** @method [useCallback<T>]  缓存函数, 把函数缓存起来，提高性能，和减少资源浪费,可以直接从它们返回的值中推断出它们的类型 */
  /** @param {参数1, 参数2} 参数1是函数，参数2是依赖项，依赖项改变就会触发函数改变 */
  /** @description 
   *  第二参数含义：
   *  a. 空数组，只会计算一次
   *  b. 不传数组，每次更新都会重新计算
   *  c. 依赖对应的值，当对应的值发生变化时，才会重新计算
   */
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


  /** @method [useMemo<T>] 计算状态 , 要用于缓存计算结果的值，类似vue的computed，可以直接从它们返回的值中推断出它们的类型 */
  /** @param {参数1, 参数2} 参数1是函数，参数2是依赖项，依赖项改变就会触发函数改变 */
  // 同时也支持传入泛型， useMemo 的泛型指定了返回值类型
  /** @description 
   *  第二参数含义：
   *  a. 空数组，只会计算一次
   *  b. 不传数组，每次更新都会重新计算
   *  c. 依赖对应的值，当对应的值发生变化时，才会重新计算
   */
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

  
  /** @method [useEffect<T>] 副作用钩子，最常见的就是向服务器请求数据 */
  /** @param {参数1, 参数2} 参数1是回调函数,可以异步操作的代码放在里面；参数2是数组[依赖项]，数组变化useEffect()就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行useEffect() */
  // 需要注意回调函数的返回值只能是函数或者 undefined
  React.useEffect(() => { // 无返回值
  }, [])
  React.useEffect(() => {
    return () => {} // 返回值是一个函数
  }, [])

  
  const [data, setData] = React.useState({name: '李白', age: 30})
  setTimeout(()=>{
    setData({name: '杜甫', age: 32})
  },3000)

  return (<div style={{width:'100%', height:'100%', background:'rgba(0,0,0,.3)',marginTop:'10px'}}>
    <Button type="primary">Hooks Code</Button><br /><br />
    {String(val)}<Button onClick={()=>{toggle(!val)}}>切换变量</Button><br /><br />
    <Button>{showUser(user)}</Button><br /><br />
    {JSON.stringify(person)}<Button onClick={()=>{setPerson({name: 'zs',age: 20})}}>为person赋值</Button><br /><br />
    <Button ref={ref1}>ref1</Button><Button onClick={()=>{onButtonClick1()}}>JS控制Ref聚焦</Button><br /><br />
    <Button>{ref2.current}</Button><br /><br />
    <Button></Button><br /><br />
    <AppContext.Provider value={data}>
      <Counter></Counter>
    </AppContext.Provider><br /><br />
    <MyPage></MyPage>
    
  </div>)
}


export default Header