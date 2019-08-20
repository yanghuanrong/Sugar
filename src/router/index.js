import React from 'react';
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import {userStore} from '@/store/userReduce'

import Layout from '@/view/Layout'
import EditProject from '@/view/EditProject'

const RouteSate = [
  {
    exact: true,
    path: '/',
    component: Layout
  },{
    path: '/editproject',
    component: EditProject
  }
]

/**
 * 路由守望
 */
@connect(userStore)
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