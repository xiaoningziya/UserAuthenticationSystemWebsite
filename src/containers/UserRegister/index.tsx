import * as React from 'react'
import styles from './styles.module.scss'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import API from '../../api/index'
import { message } from 'antd'

const initalState = {
  username: '',
  password: ''
}
type State = Readonly<typeof initalState>
type Props = Partial<{}>
export default class UserRegister extends React.Component<Props, State> {
  state: State = initalState;
  componentDidMount() {

  }
  onFinish = (values: any) => {
    if(values.username && values.password){
      this.register();
    }
  };
  register = () => {
    API.userRegister({
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      if(res.data.type==='success'){
        message.success('恭喜您，注册成功！')
      }else{
        message.warning(res.data.msg)
      }
    })
  }

  render() {
    return (<div className={styles.UserRegister}>
      <div className={styles.loginForm}>
        <div className={styles.formTit}>用户注册</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input 
              value={this.state.username} 
              onChange={(event: any)=>{ this.setState({username: event.target.value}) }} 
              prefix={<UserOutlined className="site-form-item-icon" />} 
              placeholder="Username" 
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              value={this.state.password} 
              onChange={(event: any)=>{ this.setState({password: event.target.value}) }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Link to="/UserForgetPassword" className={styles.login_form_forgot}>
              忘记密码？
            </Link>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" className={styles.login_form_button}>
              注册
            </Button>
            <Link to="/UserLogin" className={styles.toRegister}>去登录</Link>
          </Form.Item>
        </Form>
      </div>
  </div>)
  }
}