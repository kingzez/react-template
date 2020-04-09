import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSagas from './sagas'

export const history = createBrowserHistory()

function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware
        // ... other middlewares ...
      )
    )
  )
  sagaMiddleware.run(rootSagas)

  return store
}

const store = configureStore()
export default store
