export const FirebaseAction = {
  FIREBASE_ITEM_ERROR: 'FIREBASE_ITEM_ERROR',
  FIREBASE_ITEM: 'FIREBASE_ITEM',
  FIREBASE_GLOBAL_ITEM: 'FIREBASE_GLOBAL_ITEM'
}

export const addItemToFirebase = (
  data,
  collectionName,
  message = 'Item added successfully',
  error = 'an error occured'
) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection(collectionName)
      .add({
        ...data
      })
      .then(() => {
        dispatch({
          type: FirebaseAction.FIREBASE_GLOBAL_ITEM,
          payload: {
            message: message
          }
        })
      })
      .catch(err => {
        dispatch({
          type: FirebaseAction.FIREBASE_ITEM_ERROR,
          payload: {
            message: error,
            err
          }
        })
      })
  }
}

export const removeItemFromFirebase = (
  data,
  collectionName,
  message = 'Item removed successfully',
  error = 'an error occured'
) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection(collectionName)
      .doc(data.id)
      .delete()
      .then(() => {
        dispatch({
          type: FirebaseAction.FIREBASE_GLOBAL_ITEM,
          payload: {
            message: message
          }
        })
      })
      .catch(err => {
        dispatch({
          type: FirebaseAction.FIREBASE_ITEM_ERROR,
          payload: {
            message: error,
            err
          }
        })
      })
  }
}


export const updateItemFromFirebase = (
  data,
  collectionName,
  message = 'Item updated successfully',
  error = 'an error occured'
) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection(collectionName)
      .doc(data.id)
      .update({...data})
      .then(() => {
        dispatch({
          type: FirebaseAction.FIREBASE_GLOBAL_ITEM,
          payload: {
            message: message
          }
        })
      })
      .catch(err => {
        dispatch({
          type: FirebaseAction.FIREBASE_ITEM_ERROR,
          payload: {
            message: error,
            err
          }
        })
      })
  }
}
