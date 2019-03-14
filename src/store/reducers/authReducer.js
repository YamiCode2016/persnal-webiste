import { AuthAction } from '../actions/authAction'

const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AuthAction.LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login Failed'
      }
    case AuthAction.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case AuthAction.LOGOUT_SUCCESS:
      return {
        ...state,
        authError: null
      }
    default:
      return state
  }
}

export default authReducer
