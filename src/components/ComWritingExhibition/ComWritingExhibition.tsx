import * as React from 'react'
import styles from './styles.module.scss'
import withDefaultProps from '../withDefaultProps/withDefaultProps'

const defaultProps = {
  nickName: '王小二',
  age: 20
}
type Props = {
  nickName: string,
  age: number
}
class ComWritingExhibition extends React.Component<Props, {}> {
  render () {
    return (<div className={styles.ComWritingExhibition}>
      ComWritingExhibition展示页面
      <br />
      <div>昵称：{this.props.nickName}</div>
      <div>城市：{this.props.age}</div>
    </div>)
  }
}

export default withDefaultProps(defaultProps, ComWritingExhibition)