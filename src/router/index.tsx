/** @file: 无状态组件--封装路由 */

/** @type {FunctionComponent}  无状态函数组件类型*/
/** @type {FC}  无状态函数组件类型--简写*/
import { FunctionComponent, FC } from 'react'; 
import {Routes, Route, Navigate} from 'react-router-dom';
import { TRouteConfig } from './config'

interface IProps{
  routes: Array<TRouteConfig> ;
  propName?: [string]
}

const RenderHandle: FC<any> = (props: IProps, item: TRouteConfig)=>{
  if (item.redirect){
    return <Navigate to={item.redirect}/>
  }
  if (item.children){
    return <item.component {...props} routes={item.children}/>
  }else{
    return <item.component {...props}/>
  }
}

const RouterView: FunctionComponent<any> = (props: IProps) => {
  return (<Routes>
    {
      props.routes.map((item: TRouteConfig, index: number) => {
        return <Route key={index} path={item.path} element={
          RenderHandle(props, item)
        } />
      })
    }
    </Routes>)
}

export default RouterView;

// 【react-router-dom】>>>【路由标签】V6对比V5：
// 1. Routes 替换了 Switch
// 2. Navigate 组件替换了 Redirect
// 3. Route中 element 替换了 component/render 属性，且值是组件，而非组件名 ( 写法：<Route exact path="/xxx" element={<ModalName />} )


// 【react-router-dom】>>>【路由跳转】V6对比V5：
// 1. 路由跳转
// import { useNavigate } from 'react-router-dom';
//  const navigate = useNavigate();
//  navigate(path); // push
//  navigate(path, {replace: true}); // replace
// 2. 路由返回
// import { useNavigate } from 'react-router-dom';
//  const navigate = useNavigate();
//  navigate(-1);
// 3. 携带参数
// 3.1. state属性携带参数： （隐式传参）
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/listPage', {
//   state: {
//     aaa: '123',
//   }
// })
// url: http://localhost:3000/#/listPage
// 3.2. search属性携带参数：（显式传参）
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/listPage' + '?bbb=456')
// url: http://localhost:3000/#/listPage?bbb=456
// 3.3. 路由传参携带参数： （显式传参，需要router.js 中配合）
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/detailPage' + '/' + id)
// 需要router.js 中路由配合： <Route exact path="/detailPage/:id" element={<DetailPage />} />
// 跳转后新页面 通过 const { id } = useParams(); 获取，其中useParams 为 react-router-dom 内方法
// url: http://localhost:3000/#/detailPage/789