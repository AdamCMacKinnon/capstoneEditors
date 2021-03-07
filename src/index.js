import React from 'react';
import ReactDOM from 'react-dom';
import JavaScript from './JavaScript';
import Python from './Python'
import HTMLandCSS from './HTMLandCSS'
import Shell from './Shell'
import './editorstyles.css'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route path="/javascript" component={JavaScript}/>
      <Route path="/python" component={Python}/>
      <Route path="/html_css" component={HTMLandCSS}/>
      <Route path="/shell" component={Shell}/>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

