import firebase from './client'
import 'firebase/firestore'

const db = firebase.firestore()

export const getUser = (userId) => {
  return db
    .collection('users')
    .doc(userId)
    .get()
    .then((doc) => doc.data())
}

export const updateUser = ({ userId, data }) => {
  return db
    .collection('users')
    .doc(userId)
    .update({
      ...data
    })
}

export function addUserToRoom ({ user, roomId }) {
  const roomRef = db.collection('rooms').doc(roomId).collection('users').doc(user.id)

  const updateRoom = roomRef.set({
    userName: user.userName,
    avatar: user.avatar
  })
  const updateUser = db
    .collection('users')
    .doc(user.id)
    .update({
      rooms: firebase.firestore.FieldValue.arrayUnion(roomRef)
    })

  return Promise.all([updateRoom, updateUser])
}

export function getUserRooms ({ userId, roomId }, callback) {
  return db
    .collection('users')
    .doc(userId)
    .collection('rooms')
    .doc(roomId)
    .onSnapshot((snapshot) => {
      const rooms = snapshot.docs.map((doc) => doc.data())
      callback(rooms)
    })
}
