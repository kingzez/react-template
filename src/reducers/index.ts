import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter, RouterState } from 'connected-react-router'
import counterReducer from './counter'
import sidebarReducer from './sidebar'

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    count: counterReducer,
    collapsed: sidebarReducer
    // rest of reducers
  })

export interface ApplicationState {
  router: RouterState
  count: number
  collapsed: boolean
}

export default rootReducer
