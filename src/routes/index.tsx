import React, { lazy, Suspense } from 'react'
import { Route, Switch, RouteProps } from 'react-router'
import Loading from 'components/loading'

const Home = lazy(() => import('containers/Home'))
const Hello = lazy(() => import('containers/Hello'))
const Counter = lazy(() => import('containers/Counter'))
const NoMatch = lazy(() => import('containers/NoMatch'))

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
  <Suspense fallback={<Loading />}>
    <Switch>
      {routeList.map(route => RouteWithSubRoutes(route))}
      <Route component={NoMatch} />
    </Switch>
  </Suspense>
)

export default routes
