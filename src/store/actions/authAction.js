export const AuthAction = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
}

export const login = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: AuthAction.LOGIN_SUCCESS })
      })
      .catch(err => {
        dispatch({ type: AuthAction.LOGIN_ERROR, err })
      })
  }
}

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: AuthAction.LOGOUT_SUCCESS })
      })
      .catch(err => {
        dispatch({ type: AuthAction.LOGIN_ERROR, err })
      })
  }
}
