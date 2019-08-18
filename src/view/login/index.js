import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


function mapSateProps(state){
  return {isLogin: state.isLogin}
}

const mapDispatchProps = {
  login: () => ({type: 'login'})
}

@connect(mapSateProps, mapDispatchProps)
class Login extends React.Component{
  render(){
    const {isLogin, login, location} = this.props
    
    if(isLogin){
      const {state} = location
      let redirect = '/'
      state && (redirect = state.redirect)
      return <Redirect to={redirect}/>
    } else {
      return <div>
        <button onClick={login}>登录</button>
      </div>
    }
  }
}

export default Login