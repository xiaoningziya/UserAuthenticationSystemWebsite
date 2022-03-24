/** 一级路由 */
import HomePage from '../containers/HomePage/index'
import UserLogin from '../containers/UserLogin/index'
import ComWritingParent from '../pages/WritingParent/WritingParent'

/** 二级路由 */
import ComWritingExhibition from '../pages/WritingExhibition/WritingExhibition'
import { type } from 'os';

export type TRouteConfig = {
  readonly path: string;
  readonly component?: any;
  readonly redirect?: string;
  readonly children?: Array<object>;
}


const routes: Array<TRouteConfig> = 
  [{
    /** @module React+Ts类组件的写法示范 */ 
    path: '/ComWritingParent/*', 
    component: ComWritingParent,
    children: [{ 
      /** @module [react-router-dom]v5版本路由API使用 */
      path: '/ComWritingExhibition', 
      component: ComWritingExhibition 
    },]
  },{ 
    /** @module 登录页面 */
    path: '/UserLogin', 
    component: UserLogin 
  },{ 
    /** @module 主页面 */
    path: '/HomePage', 
    component: HomePage,
  },{ 
    path: '/', 
    redirect: '/HomePage' 
  },]

export default routes