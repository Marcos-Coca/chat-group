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
  console.log(user, roomId)
  const roomRef = db.collection('rooms').doc(roomId)
  const updateRoom = roomRef.collection('users').doc(user.id).set({
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

export function getUserRooms (userId, callback) {
  return db
    .collection('users')
    .doc(userId)
    .onSnapshot((snapshot) => {
      const roomsRefs = snapshot.data().rooms
      const rooms = roomsRefs.map((roomRef) => roomRef.get())
      Promise.all(rooms)
        .then((rooms) => rooms.map((room) => ({ id: room.id, ...room.data() })))
        .then(callback)
    })
}

export function leaveRoom ({ userId, roomId }) {
  const roomRef = db.collection('rooms').doc(roomId)
  const userRef = db.collection('users').doc(userId)

  const updateRoom = roomRef.collection('users').doc(userId).delete()
  const updateUser = userRef.update({ rooms: firebase.firestore.FieldValue.arrayRemove(roomRef) })

  return Promise.all([updateRoom, updateUser])
}
