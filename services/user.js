import firebase from './client'
import 'firebase/firestore'

const db = firebase.firestore()

export const getUser = (userId) => {
  return db.collection('users').doc(userId).get().then(doc => doc.data())
}

export function addUserToRoom ({ user, roomId }) {
  const roomRef = db.collection('rooms').doc(roomId)

  const updateRoom = roomRef.update({
    users: firebase.firestore.FieldValue.arrayUnion({
      id: user.id,
      userName: user.userName,
      avatar: user.avatar
    })
  })
  const updateUser = db.collection('users')
    .doc(user.id)
    .update({
      users: firebase.firestore.FieldValue.arrayUnion(roomRef)
    })

  return Promise.all([updateRoom, updateUser])
}
