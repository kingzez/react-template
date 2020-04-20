import constants from 'constants/user.action'

const initState = {
  isAuthed: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user') || '{}'),
  token: localStorage.getItem('token') || '',
}

const userReducer = (state = initState, action: any) => {
  switch (action.type) {
    case constants.LOGIN_REQUEST:
      return { ...state }
    case constants.LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.user))
      localStorage.setItem('token', action.user.sessionID)
      return {
        ...state,
        isAuthed: true,
        user: action.user,
        token: action.user.sessionID,
      }
    case constants.LOGOUT:
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      return { ...state, isAuthed: false, user: {}, token: '' }
    default:
      return state
  }
}

export default userReducer

// https://api.github.com/users/kingzez
