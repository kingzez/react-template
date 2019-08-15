const sidebarReducer = (state = false, action) => {
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
