import React, { Component } from 'react'
import About from './Pages/about'
import Jobs from './Pages/jobs'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/About" component={About} />
          <Route path="/Jobs" component={Jobs} />
          <About />
        </Switch>
      </Router>
    )
  }
}

export default App