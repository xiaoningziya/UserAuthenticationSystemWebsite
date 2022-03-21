/** @description: 动作定义 */

import * as TYPES from "./types";
import { Dispatch } from "redux";

// 加法--同步
export const countPlusCreater = (name: any) =>({type:TYPES.COUNT_PLUS,data:name})
// 加法--异步
export const countPlusAsync = (name: any, dispatch: Dispatch) =>{
    setTimeout(()=>{
        dispatch(countPlusCreater(name))
    },2000);
}
// 减法--同步
export const countReduceCreater = (name: any) =>({type:TYPES.COUNT_REDUCE,data:name})
// 减法--异步
export const countReduceAsync = (name: any, dispatch: Dispatch) =>{
    setTimeout(()=>{
        dispatch(countReduceCreater(name))
    },2000);
}