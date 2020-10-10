import firebase from './client'
import 'firebase/firestore'

const db = firebase.firestore().collection('users')

export const getUser = (userId) => {
  return db.doc(userId).get().then(doc => doc.data())
}
