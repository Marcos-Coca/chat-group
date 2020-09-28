import firebase from 'firebase/app'
import 'firebase/auth'

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

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

export const loginWithTwitter = () => {
  const twitterProvider = new firebase.auth.TwitterAuthProvider()
  return firebase.auth().signInWithPopup(twitterProvider)
}

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(googleProvider)
}

export const loginWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider()
  return firebase.auth().signInWithPopup(facebookProvider)
}

export const loginWithEmail = (email) => {
  const actionCodeSettings = {
    url: 'http://localhost:3000/login/email',
    handleCodeInApp: true
  }
  return firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
}

export const isSignInWithEmailLink = (url) => {
  return firebase.auth().isSignInWithEmailLink(url)
}

export const signInWithEmailLink = (email, href) => {
  return firebase.auth().signInWithEmailLink(email, href)
}

export const onAuthStateChanged = (onChange) => {
  firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null

    onChange(normalizedUser)
  })
}

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    id: uid,
    avatar: photoURL,
    userName: displayName,
    email
  }
}
