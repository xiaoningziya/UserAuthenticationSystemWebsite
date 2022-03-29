import * as React from 'react'
import styles from './styles.module.scss'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const initalState = {
  name: 'xxx'
}
type State = Readonly<typeof initalState>
type Props = Partial<{}>
export default class UserForgetPassword extends React.Component<Props, State> {
  state: State = initalState;
  componentDidMount() {

  }
  onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (<div className={styles.UserForgetPassword}>
      <div className={styles.loginForm}>
        <div className={styles.formTit}>找回密码</div>
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            {/* <a className={styles.login_form_forgot} href="">
              忘记密码？
            </a> */}
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" className={styles.login_form_button}>
              申诉
            </Button>
            <Link to="/UserLogin" className={styles.toRegister}>去登录</Link>
          </Form.Item>
        </Form>
      </div>
  </div>)
  }
}