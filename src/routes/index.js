import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../containers/Home'
import Hello from '../containers/Hello'
import Counter from '../containers/Counter'
import NoMatch from '../containers/NoMatch'
import NavBar from '../containers/NavBar'

const routes = (
  <div>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hello" component={Hello} />
        <Route path="/counter" component={Counter} />
        <Route component={NoMatch} />
      </Switch>
  </div>
)

export default routes