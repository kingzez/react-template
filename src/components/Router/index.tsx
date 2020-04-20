import React, { lazy, Suspense } from 'react'
import { Route, Switch, RouteProps } from 'react-router'
import Loading from 'components/Loading'

const Home = lazy(() => import('pages/Home'))
const Login = lazy(() => import('pages/Login'))
const Counter = lazy(() => import('pages/Counter'))
const NoMatch = lazy(() => import('pages/NoMatch'))

interface RouteElement extends RouteProps {
  icon?: string
  title: string
  path: string
  auth: string
  children?: RouteElement[]
}

export const routes: RouteElement[] = [
  {
    icon: 'home',
    title: 'Home',
    path: '/',
    exact: true,
    component: Home,
    auth: '',
  },
  {
    icon: 'smile',
    title: 'Nest',
    path: '/nest',
    exact: false,
    auth: '',
    children: [
      {
        icon: 'user-add',
        title: 'One',
        path: '/nest/one',
        exact: true,
        component: () => <div>One</div>,
        auth: '',
      },
      {
        icon: 'usergroup-add',
        title: 'Two',
        path: '/nest/two',
        exact: true,
        component: () => <div>Two</div>,
        auth: '',
      },
    ],
  },
  {
    icon: 'calculator',
    title: 'Counter',
    path: '/counter',
    exact: true,
    component: Counter,
    auth: '',
  },
  {
    icon: 'code',
    title: 'Login',
    path: '/login',
    exact: true,
    component: Login,
    auth: '',
  },
]

// TODO：not good, just support level two
const RouteWithSubRoutes = (route: RouteElement): JSX.Element => {
  return (
    <Route
      key={route.path}
      exact={route.exact}
      path={route.path}
      component={route.component}>
      {route.children && route.children.length > 0
        ? route.children.map((subRoute: RouteElement) => (
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

const Router = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((route) => RouteWithSubRoutes(route))}
      <Route component={NoMatch} />
    </Switch>
  </Suspense>
)

export default Router
