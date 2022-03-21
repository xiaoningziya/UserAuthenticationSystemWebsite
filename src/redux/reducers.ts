/** @description:  减速器定义*/

import * as TYPES from './types';
import {combineReducers} from 'redux';

function countCompute(state: number = 10, action: { type: any; data: any; }){
    console.log('countCompute',state,action)
    switch(action.type){
        case TYPES.COUNT_PLUS:
            return state +1
        case TYPES.COUNT_REDUCE:
            return state -1
        default:
            return state
    }
}

/** 合并Reducers */
export const finalReducer = combineReducers({
    countCompute
})