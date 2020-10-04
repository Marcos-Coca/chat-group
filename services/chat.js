import firebase from './client'
import 'firebase/firestore'

const db = firebase.firestore()

export function sendMessage (roomId, message, user) {
  const roomRef = db.collection('rooms').doc(roomId).collection('messages')

  roomRef.add({
    user,
    message
  })
}

export function getMessages (roomId) {
  const roomRef = db.collection('rooms').doc(roomId).collection('messages')
  return roomRef
    .limit(1)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, ' => ', doc.data())
      })
    })
    .catch(function (error) {
      console.log('Error getting documents: ', error)
    })
}
