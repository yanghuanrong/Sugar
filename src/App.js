import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import store from './store'
import {Provider, connect} from 'react-redux'

function Home(){
  return <div>1111</div>
}

function mapSateProps(state){
  return {isLogin: state.isLogin}
}

const mapDispatchProps = {
  login: () => {
    console.log(2222)
    return {type: 'login'}
  }
}

const Login = connect(mapSateProps, mapDispatchProps)((parps) => {
  const {isLogin, login, location} = parps
  if(isLogin){
    return <Redirect to={location.state.redirect}/>
  } else {
    return <div>
      <button onClick={login}>登录</button>
    </div>
  }
})


function News(){
  return <div>222</div>
}

function NoMatch(parps){
  return <div>404, {parps.location.pathname} 不存在</div>
}

/**
 * 路由守望
 */
const PrivateRoute = connect(mapSateProps, mapDispatchProps)(({component: Comp, isLogin, ...rest}) => {
  const redirect = parps => {
    if (isLogin) {
      return <Comp/>
    } else {
      return <Redirect to={{
        pathname: '/login',
        state: {
          redirect: parps.location.pathname
        }
      }} />
    }
  }
  return <Route {...rest} render={redirect}></Route>
})

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path='/news' component={News} />
          <Route path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
