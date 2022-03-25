/**
 * @file
 * 请求方法文件
 */

 import Abstract from './axios/abstract'
 import * as APIInterface from './interface'
 import { CustomResponse } from './axios/types'

/**
 * 请求方法
 * GET请求 : 
 *  @方法 getReq
 *  @参数 params
 * POST请求：
 *  @方法 postReq
 *  @参数 data
 */

class API extends Abstract {
  // 用户登录
  userLogin (params: APIInterface.IUserLogin): Promise<CustomResponse> {
    return this.postReq({ url: '/user/login', params })
  }
}

// 单列模式返回对象
let instance
export default (() => {
  if (instance) return instance
  instance = new API()
  return instance
})()