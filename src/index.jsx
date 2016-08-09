// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import Info from './Info.jsx';
import Graphs from './Graphs.jsx';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="info" component={Info} />
      <Route path="graphs" component={Graphs} />
    </Route>
  </Router>,
  document.getElementById('react-root')
);
