import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'
import LoginPage from './view/login'
import NoMatchPage from './view/nomatch'
import {PrivateRoute, RouteSate} from './router'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          {
            RouteSate.map((item, i) => <PrivateRoute key={i} {...item} />)
          }
          <Route path="/login" component={LoginPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
