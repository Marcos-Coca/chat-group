import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAlEhCkRtneOKFjjbvdgl2p-IZ1Z5-h9dM',
  authDomain: 'chat-group-bd725.firebaseapp.com',
  databaseURL: 'https://chat-group-bd725.firebaseio.com',
  projectId: 'chat-group-bd725',
  storageBucket: 'chat-group-bd725.appspot.com',
  messagingSenderId: '893385340808',
  appId: '1:893385340808:web:20b3ab1c99568098b7ac3d',
  measurementId: 'G-MGBQGBL9LQ'
}

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig)

export default firebase
