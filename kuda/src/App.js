import React, { Component } from 'react'
import About from './Pages/about'
import Projects from './Pages/projects'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Favicon from 'react-favicon';

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <About />
        </Switch>
      </Router>
    )
  }
}

export default App