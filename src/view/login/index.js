import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Button } from 'antd';

function mapSateProps(state){
  return {isLogin: state.isLogin}
}

const mapDispatchProps = {
  login: () => ({type: 'login'})
}

@connect(mapSateProps, mapDispatchProps)
class LoginPage extends React.Component{
  render(){
    const {isLogin, login, location} = this.props
    
    if(isLogin){
      const {state} = location
      let redirect = '/'
      state && (redirect = state.redirect)
      return <Redirect to={redirect}/>
    } else {
      return <div>
        <Button type="danger">Dashed</Button>
        <Button onClick={login}>登录</Button>
      </div>
    }
  }
}

export default LoginPage