import { combineReducers } from 'redux'
import authReducer from './authReducer'
import infoReducer from './infoReducer'
import socialReducer from './socialReducer'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  info: infoReducer,
  social: socialReducer,
  firestore: firestoreReducer
})

export default rootReducer
