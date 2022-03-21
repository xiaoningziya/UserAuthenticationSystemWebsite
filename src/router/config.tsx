/** 一级路由 */
import HomePage from '../containers/HomePage/index'
import UserLogin from '../containers/UserLogin/index'
import ComWritingParent from '../components/ComWritingParent/ComWritingParent'

/** 二级路由 */
// import Home from '../containers/home/home'

interface IRouteConfig {
  path: string,
  component?: any,
  redirect?: string
  children?: IRouteConfig
}

const routes: Array<IRouteConfig> = [
  // @file: React+Ts 类组件的写法示范
  { path: '/ComWritingParent', component: ComWritingParent },
  // @file: 登录页面
  { path: '/UserLogin', component: UserLogin },
  // @file: 主页面
  {path: '/HomePage', component: HomePage,
    //  children: [
    //   { path: '/root/home', component: Home },
    // ]
  },
  { path: '/', redirect: '/HomePage' },
]

export default routes