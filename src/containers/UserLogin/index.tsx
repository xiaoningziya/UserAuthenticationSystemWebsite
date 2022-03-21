import * as React from 'react'
import styles from './styles.module.scss'

export default class UserLogin extends React.Component {
  constructor(props: any){
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (<div className={styles.UserLogin}>
      登录页面
  </div>)
  }
}