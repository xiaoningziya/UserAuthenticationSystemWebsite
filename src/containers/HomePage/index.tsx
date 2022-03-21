import * as React from 'react'
import styles from './styles.module.scss'
export default class HomePage extends React.Component {
  constructor(props: any){
    super(props)
  }
  render() {
    return (<div className={styles.HomePage}>
      主页面
  </div>)
  }
}