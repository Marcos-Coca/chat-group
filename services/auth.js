import 'firebase/auth'
import firebase from './client'

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
    url: 'https://chat-group.vercel.app/login/email',
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
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebase(user) : null
    onChange(normalizedUser)
  })
}
export const logOut = () => firebase.auth().signOut()

const mapUserFromFirebase = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    id: uid,
    email,
    avatar: photoURL || 'https://res.cloudinary.com/djhogcejw/image/upload/v1602619386/defaultuser_abshi2.png',
    userName: displayName || `guess${user.uid.slice(0, 5)}`
  }
}
