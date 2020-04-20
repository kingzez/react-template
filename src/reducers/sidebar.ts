import { Action } from 'redux'

const sidebarReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return true
    case 'CLOSE_SIDEBAR':
      return false
    default:
      return state
  }
}

export default sidebarReducer
