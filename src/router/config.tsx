//一级路由
import HomePage from '../containers/HomePage/index'
import UserLogin from '../containers/UserLogin/index'

//二级路由
// import Home from '../containers/home/home'

interface IRouteConfig {
  path: string,
  component?: any,
  redirect?: string
  children?: IRouteConfig
}

const routes: Array<IRouteConfig> = [
  { path: '/UserLogin', component: UserLogin },
  {
    path: '/HomePage', component: HomePage,
    //  children: [
    //   { path: '/root/home', component: Home },
    // ]
  },
  { path: '/', redirect: '/HomePage' },
]

export default routes