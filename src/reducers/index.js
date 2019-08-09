import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  count: counterReducer
  // rest of reducers
})

export default rootReducer