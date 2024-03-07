import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import Home from './views/home';
import NotFound from './views/not-found';
import Log from './views/log';
import Nav from './components/nav_and_footer/nav';
import Guide from './components/guide/guide';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/guide" component={Guide} exact />
          <Route path="/log" component={Log} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(<App />, document.getElementById('app'));