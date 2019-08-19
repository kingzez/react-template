import React from 'react'
import { Route, Switch, RouteProps } from 'react-router'
import Home from 'containers/Home'
import Hello from 'containers/Hello'
import Counter from 'containers/Counter'
import NoMatch from 'containers/NoMatch'

interface RouteEle extends RouteProps {
  icon?: string
  title: string
  children?: RouteEle[]
  path: string
}

export const routeList: RouteEle[] = [
  {
    icon: 'home',
    title: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    icon: 'smile',
    title: 'Nest',
    path: '/nest',
    exact: false,
    children: [
      {
        icon: 'user-add',
        title: 'One',
        path: '/nest/one',
        exact: true,
        component: () => <div>One</div>
      },
      {
        icon: 'usergroup-add',
        title: 'Two',
        path: '/nest/two',
        exact: true,
        component: () => <div>Two</div>
      }
    ]
  },
  {
    icon: 'calculator',
    title: 'Counter',
    path: '/counter',
    exact: true,
    component: Counter
  },
  {
    icon: 'code',
    title: 'Hello',
    path: '/hello',
    exact: true,
    component: Hello
  }
]

// TODO：not good, just support level two
function RouteWithSubRoutes(route: RouteEle) {
  return (
    <Route
      key={route.path}
      exact={route.exact}
      path={route.path}
      component={route.component}>
      {route.children && route.children.length > 0
        ? route.children.map((subRoute: RouteEle) => (
            <Route
              key={subRoute.path}
              exact={subRoute.exact}
              path={subRoute.path}
              component={subRoute.component}
            />
          ))
        : null}
    </Route>
  )
}

const routes = (
  <Switch>
    {routeList.map(route => RouteWithSubRoutes(route))}
    <Route component={NoMatch} />
  </Switch>
)

export default routes
