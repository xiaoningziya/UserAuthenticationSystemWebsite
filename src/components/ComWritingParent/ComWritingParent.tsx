import * as React from 'react'
import styles from './styles.module.scss'
import ComWritingChild from '../ComWritingChild/ComWritingChild'
import { Button } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import RouterView from '../../router/index'

/** state-step-1: 给定初始变量值 或 给定类型 */
const initalState = {
  size: 'large',
  childName:'Props',
  timer: null as NodeJS.Timer | null
}
/** state-step-2: 通过内部类型Readonly,将对象中每个属性用只读修饰，实现”this.state.xxx=xxx“的直接赋值语法报错 */
type State = Readonly<typeof initalState>
/** props: 映射给定类型 */
type Props = Partial<{
  routes: Array<object>
  count: number
}>
class ComWritingParent extends React.Component<Props, State> {
  /** state-step-3: 通过class类的readonly修饰符，将state对象修饰为只读，使用”this.state=xxx“会提示报错 */
  readonly state: State = initalState;
  componentDidMount() {
  }
  render() {
    return (<div className={styles.ComWritingParent}>
      <div>父级页面--展示</div>
      <Button size='large'>countCompute: { this.props.count }</Button>
      <ComWritingChild comName={this.state.childName} fromChildTip={this.fromChildTip}></ComWritingChild>
      <Link to="/ComWritingParent/ComWritingExhibition">跳转至 /ComWritingParent/ComWritingExhibition 页面</Link>
      <RouterView routes={this.props.routes}></RouterView>
  </div>)
  }
  private fromChildTip = (text: string)=> {
    console.log('父组件打印--子组件传递上来的数据',text);
  }
}

const mapStateToProps = (state: any) => ({
  count: state.countCompute
})
const mapDispachToProps = () => ({})

export default connect(
  mapStateToProps, // 参数1将 store 中的数据作为 props 绑定到组件上 
  mapDispachToProps // 参数2将 action 作为 props 绑定到组件上
  // [mergeProps], // 参数3用于自定义merge流程，将stateProps 和 dispatchProps merge 到parentProps之后赋给组件。通常情况下，你可以不传这个参数，connect会使用 Object.assign。
  // [options] // 如果指定这个参数，可以定制 connector 的行为。一般不用。
)(ComWritingParent)