import * as React from 'react'
import styles from './styles.module.scss'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import * as actions from '../../redux/actions';

const initalState = {}
type State = Readonly<typeof initalState>
type Props = Partial<{
  _countPlusCreater: (arg: any)=> void,
  _countPlusAsync: (arg: any)=> void,
  _countReduceCreater: (arg: any)=> void,
  _countReduceAsync: (arg: any)=> void,

  comName: string
  fromChildTip: (text: string) => void
}>
class ComWritingChild extends React.Component<Props, State> {
  readonly state: State = initalState;
  render() {
    return (<div className={styles.ComWritingChild}>
      <div>子级页面--操作</div>
      <Button type="primary" size='large' onClick={this.props._countPlusCreater}>+1 Creater</Button><br /><br />
      <Button type="primary" size='large' onClick={this.props._countPlusAsync}>+1 Async</Button><br /><br />
      <Button type="primary" size='large' onClick={this.props._countReduceCreater}>-1 Creater</Button><br /><br />
      <Button type="primary" size='large' onClick={this.props._countReduceAsync}>-1 Async</Button><br /><br />
      <Button size='large'>组件通讯 》 父向子 》 { this.props.comName }</Button><br /><br />
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