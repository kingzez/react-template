import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import sidebarReducer from './sidebar'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    count: counterReducer,
    collapsed: sidebarReducer
    // rest of reducers
  })

export default rootReducer
