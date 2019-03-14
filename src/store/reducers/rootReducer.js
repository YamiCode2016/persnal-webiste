import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { firestoreReducer } from 'redux-firestore'
import {firebaseReducer } from 'react-redux-firebase';
import myFirebaseReducer from './firebaseReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  firebaseRedux: myFirebaseReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer
