import { FirebaseAction } from '../actions/firebaseAction'

const initState = {}

const myFirebaseReducer = (store = initState, action) => {
  switch (action.type) {
    case FirebaseAction.FIREBASE_GLOBAL_ITEM:
      console.log(action.payload.message)
      return store
    case FirebaseAction.FIREBASE_ITEM_ERROR:
      console.log(action.payload.err)
      return store
    default:
      return store
  }
}

export default myFirebaseReducer
