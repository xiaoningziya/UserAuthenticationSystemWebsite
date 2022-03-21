/** @description: 仓库生成 */

import {createStore,applyMiddleware} from 'redux';
import {finalReducer} from './reducers';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

/** redux持久化的实现 */
const persistConfig = {
  key: 'NingAdmin',
  storage: storage,
  stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};
const myPersistReducer = persistReducer(persistConfig, (finalReducer as any))

/** 生成store对象 */
const store = createStore(myPersistReducer,applyMiddleware(thunk)); // 内部会第一次调用reducer函数，得到初始state 
export const persistor = persistStore(store)
export default store