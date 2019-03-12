import axios from 'axios'
export const SocialAction = {
  DELETE_SOCIAL: 'DELETE_SOCIAL',
  GET_SOCIAL: 'GET_SOCIAL'
}

export const getSocial = id => {
  return (dispatch, getState) => {
    axios
      .get('http://cloud.peaqock.com:3001/api/about/careers')
      .then(result => {
        dispatch({
          type: SocialAction.GET_SOCIAL,
          payload: result.data.careers
        })
      })
  }
}

export const addSocial = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('socials')
      .add({
        ...data
      })
      .then(() => {
        dispatch({
          type: SocialAction.GET_SOCIAL,
          payload: []
        })
      })
      .catch(err => {
        dispatch({
          type: SocialAction.GET_SOCIAL,
          payload: []
        })
      })
  }
}

export const putSocial = id => {
  return (dispatch, getState) => {
    axios
      .get('http://cloud.peaqock.com:3001/api/about/careers')
      .then(result => {
        dispatch({
          type: SocialAction.GET_SOCIAL,
          payload: result.data.careers
        })
      })
  }
}

export const deleteSocial = id => {
  return { type: SocialAction.DELETE_SOCIAL, id }
}
