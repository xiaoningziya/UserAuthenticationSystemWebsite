import * as React from 'react'
import styles from './styles.module.scss'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import * as actions from '../../redux/actions';

const initalState = {}
type State = Readonly<typeof initalState>
const initProps = {
  phone: '13311112222'
}
type Props = Partial<{
  /** 仓库派发方法 */
  _countPlusCreater: (arg: any)=> void,
  _countPlusAsync: (arg: any)=> void,
  _countReduceCreater: (arg: any)=> void,
  _countReduceAsync: (arg: any)=> void,
  /** 父级传递的Props */
  comName: string,
  comId: number,
  /** 父级传递的回调函数 */
  fromChildTip: (text: string) => void
} & typeof initProps>
class ComWritingChild<T> extends React.Component<Props, State> {
  readonly state: State = initalState;
  /** Props默认值 & Props类型推导 */ 
  static readonly defaultProps = initProps;
  render() {
    return (<div className={styles.ComWritingChild}>
      <div>子级页面--操作</div>
      {/* 事件调用 */}
      <Button type="primary" size='large' onClick={this.props._countPlusCreater}>+1 Creater</Button><br /><br />
      <Button type="primary" size='large' onClick={this.props._countPlusAsync}>+1 Async</Button><br /><br />
      <Button type="primary" size='large' onClick={this.props._countReduceCreater}>-1 Creater</Button><br /><br />
      <Button type="primary" size='large' onClick={this.props._countReduceAsync}>-1 Async</Button><br /><br />
      <Button size='large'>组件通讯 》 父向子 》 {this.props.comName} -- {this.props.comId} -- {this.props.phone}</Button><br /><br />
      {/* 非空判定符 */}
      <Button size='large'>手机号的长度：{this.props.phone!.length}</Button><br /><br />
      <Button size='large' onClick={()=>{this.props.fromChildTip && this.props.fromChildTip('code-0029')}}>组件通讯 》 子向父 》 回调函数</Button><br /><br />
  </div>)
  }
}

const mapStateToProps = () => ({})
const mapDispachToProps = (dispatch: Dispatch) => ({
  _countPlusCreater: (arg: any) => {dispatch(actions.countPlusCreater(arg))},
  _countPlusAsync: (arg: any) => {actions.countPlusAsync(arg)()},
  _countReduceCreater: (arg: any) => {dispatch(actions.countReduceCreater(arg))},
  _countReduceAsync: (arg: any) => {actions.countReduceAsync(arg)()},
})

export default connect(
  mapStateToProps,
  mapDispachToProps
)(ComWritingChild)