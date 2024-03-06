import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import Log from './views/log'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Log} exact path="/log" />
        <Route component={NotFound} path="*" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))