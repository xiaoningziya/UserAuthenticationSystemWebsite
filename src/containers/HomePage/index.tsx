import * as React from 'react'
import styles from './styles.module.scss'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import { Button } from 'antd'
export default class HomePage extends React.Component {
  constructor(props: any){
    super(props)
  }
  render() {
    return (<div className={styles.HomePage}>
      <Button type="primary">Hooks</Button>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
  </div>)
  }
}