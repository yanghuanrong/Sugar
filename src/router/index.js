import React from 'react';
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

import HomePage from '@/view/home'
import AboutPage from '@/view/about'

const RouteSate = [
  {
    exact: true,
    path: '/',
    component: HomePage
  },{
    path: '/about',
    component: AboutPage
  }
]

function mapSateProps(state){
  return {isLogin: state.isLogin}
}
/**
 * 路由守望
 */
@connect(mapSateProps)
class PrivateRoute extends React.Component{
  render(){
    const {component: Comp, isLogin, ...rest} = this.props
    const redirect = props => {
      if (isLogin) {
        return <Comp/>
      } else {
        return <Redirect to={{
          pathname: '/login',
          state: {
            redirect: props.location.pathname
          }
        }} />
      }
    }
    return <Route {...rest} render={redirect}></Route> 
  }
}

export {
  PrivateRoute,
  RouteSate
}