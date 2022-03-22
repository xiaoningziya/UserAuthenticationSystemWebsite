/** @description: 仓库生成 */

import { createStore, applyMiddleware } from 'redux';
import { finalReducer } from './reducers';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { createLogger }  from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

/** redux持久化的实现 */
const persistConfig = {
  key: 'NingAdmin',
  storage: storage,
  stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};
const myPersistReducer = persistReducer(persistConfig, (finalReducer as any))

/** @method: <applyMiddleware> 它是Redux的原生方法，作用是将所有中间件组成一个数组，依次执行 */
/** @package <redux-thunk> 异步解决方案,改造store.dispatch 使得其可以接受函数作为参数 （它的核心代码其实只有两行，就是判断每个经过它的action：如果是function类型，就调用这个function（并传入 dispatch 和 getState 及 extraArgument 为参数），而不是任由让它到达 reducer，因为 reducer 是个纯函数，Redux 规定到达 reducer 的 action 必须是一个 plain object 类型）*/
/** @package <redux-promise> 异步解决方案 , 改造store.dispatch 使得其可以接受Promise作为参数 */
/** @package <redux-logger> 日志中间件 (必须排放在最后，仅且在开发模式下使用) */
/** @package <redu-saga>  1.统一action的形式 */
/**                       2.集中处理异步等存在副作用的逻辑 
                          3.通过转化effects函数，可以方便进行单元测试 
                          4.完善和严谨的流程控制，可以较为清晰的控制复杂的逻辑 */
const logger = createLogger({});
const applyMiddlewareExample = applyMiddleware(ReduxThunk,ReduxPromise,logger);

/** 生成store对象 */
const store = createStore(myPersistReducer,applyMiddlewareExample); // 内部会第一次调用reducer函数，得到初始state 
export const persistor = persistStore(store);
export const { dispatch } = store; // 单独抛出 dispatch 供 action的异步行为使用
export default store;