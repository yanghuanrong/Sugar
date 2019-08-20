import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'
import Login from './view/Login'
import NoMatch from './view/NoMatch'
import {PrivateRoute, RouteSate} from './router'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          {
            RouteSate.map((item, i) => <PrivateRoute key={i} {...item} />)
          }
          <Route path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
