import React, { lazy, Suspense } from 'react'
import { Route, Switch, RouteProps, RouteComponentProps } from 'react-router'
import Loading from 'components/Loading/index' // solve github action build

const Home = lazy(() => import('pages/Home'))
const Login = lazy(() => import('pages/Login'))
const Counter = lazy(() => import('pages/Counter'))
const NoMatch = lazy(() => import('pages/NoMatch'))

interface RouteElement extends RouteProps {
  icon?: string
  title: string
  path: string
  auth: string
  exact: boolean
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

interface Props {
  Component: any // React.FC<RouteComponentProps>
  path: string
  exact: boolean
  auth: string
  children?: RouteElement[]
}

const hasPermission = (auth: string) => {
  console.log(auth)
  return true
}

const AuthRoute = ({
  Component,
  path,
  exact,
  auth,
  children = [],
}: Props): JSX.Element => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        hasPermission(auth) ? (
          <Component {...props} />
        ) : (
          // <Redirect to={{ pathname: '/login' }} />
          <Route component={NoMatch} />
        )
      }>
      {children.length > 0
        ? children.map((subRoute: any) => (
            <AuthRoute
              key={subRoute.path}
              exact={subRoute.exact}
              path={subRoute.path}
              auth={subRoute.auth}
              Component={subRoute.component}>
              {subRoute.children}
            </AuthRoute>
          ))
        : null}
    </Route>
  )
}

// TODO：not good, just support level two
const RouteWithSubRoutes = (route: RouteElement): JSX.Element => {
  return (
    <AuthRoute
      key={route.path}
      exact={route.exact}
      path={route.path}
      auth={route.auth}
      Component={route.component}>
      {route.children}
    </AuthRoute>
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
