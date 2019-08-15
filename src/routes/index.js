import React from 'react'
import { Route, Switch } from 'react-router'
import Layout from '../containers/Layout'
import Hello from '../containers/Hello'
import Counter from '../containers/Counter'
import NoMatch from '../containers/NoMatch'

export const routeList = [
  {
    icon: 'user',
    title: 'Home',
    path: '/',
    component: Layout
  },
  {
    icon: 'video-camera',
    title: 'hello',
    path: '/hello',
    component: Hello
  },
  {
    icon: 'upload',
    title: 'Counter',
    path: '/counter',
    component: Counter
  },
  {
    icon: 'download',
    title: 'download',
    path: '/aaa',
    component: Counter
  }
]

const routes = (
  <Switch>
    {routeList.map(item => (
      <Route
        exact={item.path === '/' ? true : false}
        path={item.path}
        component={item.component}
        key={item.path}
      />
    ))}
    <Route component={NoMatch} />
  </Switch>
)

export default routes
