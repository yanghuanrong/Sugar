import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Button, Input, Icon, Form } from 'antd';
import {login, userStore} from '@/store/userReduce'


@Form.create({ name: 'normal_login' })
@connect(userStore, {login})
class LoginPage extends React.Component{

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values)
      }
    })
  }

  render(){
    const {isLogin, location} = this.props
    
    if (isLogin) {

      const {state} = location
      let redirect = '/'
      state && (redirect = state.redirect)
      return <Redirect to={redirect}/>

    } else {

      const { getFieldDecorator } = this.props.form
      return <div className="login-page">
        <div className="login-logo">
          <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
        </div>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
      </div>
    }
  }
}

export default LoginPage