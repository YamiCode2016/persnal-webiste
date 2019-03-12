import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDGKrq8W39VY67524UAHgbeg6tPR_NVNmg',
  authDomain: 'zemouribadr-e60e7.firebaseapp.com',
  databaseURL: 'https://zemouribadr-e60e7.firebaseio.com',
  projectId: 'zemouribadr-e60e7',
  storageBucket: 'zemouribadr-e60e7.appspot.com',
  messagingSenderId: '560292925164'
}

firebase.initializeApp(config)
firebase.firestore()

export default firebase;