import * as React from 'react'
import styles from './styles.module.scss'
import HooksCode from './components/HooksCode'
import { Button } from 'antd'
export default class HomePage extends React.Component {
  constructor(props: any){
    super(props)
  }
  render() {
    return (<div className={styles.HomePage}>
      <HooksCode></HooksCode>
  </div>)
  }
}