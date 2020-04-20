import { Dispatch } from 'redux'
import constants from 'constants/user.action'
import * as Api from 'apis'
import { history } from 'configureStore'

export const login = ({
  username,
  password,
}: {
  username: string
  password: string
}) => {
  return (dispatch: Dispatch) => {
    dispatch(request({}))

    Api.login({ username, password })
      .then((res) => {
        dispatch(success(res.data))
        history.push('/')
      })
      .catch((err) => {
        dispatch(failure(err))
      })
  }
  function request(user: any) {
    return { type: constants.LOGIN_REQUEST, user }
  }
  function success(user: any) {
    return { type: constants.LOGIN_SUCCESS, user }
  }
  function failure(error: any) {
    return { type: constants.LOGIN_FAILURE, error }
  }
}
