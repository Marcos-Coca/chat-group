import firebase from './client'
import 'firebase/firestore'

import { addUserToRoom } from './user'

const db = firebase.firestore()

export function sendMessage ({ roomId, message, user }) {
  const roomRef = db.collection('rooms').doc(roomId).collection('messages')

  return roomRef.add({
    user,
    message,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date())
  })
}

export function messagesGetter ({ roomId }) {
  let startAfter = ''

  function getMessages () {
    return db
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .limit(10)
      .orderBy('createdAt', 'desc')
      .startAfter(startAfter)
      .get()
      .then((documentSnapshots) => {
        const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
        startAfter = lastVisible || ''
        const messages = documentSnapshots.docs.map(mapMessageFromFirebase)
        return messages
      })
  }
  return getMessages
}

function mapMessageFromFirebase (doc) {
  const id = doc.id
  const data = doc.data()
  const { createdAt } = data

  return {
    id,
    ...data,
    createdAt: createdAt.toDate()
  }
}

export function getLiveMessages (roomId, callback) {
  return db
    .collection('rooms')
    .doc(roomId)
    .collection('messages')
    .limit(1)
    .orderBy('createdAt', 'desc')
    .onSnapshot((snapshot) => {
      const newMessages = snapshot.docs.map(mapMessageFromFirebase)
      callback(newMessages)
    })
}

export function getRoom (roomId) {
  return db.collection('rooms').doc(roomId).get().then(mapRoomFromFirebase)
}

function mapRoomFromFirebase (doc) {
  const id = doc.id
  const room = doc.data()
  return {
    id,
    ...room
  }
}

export function getLiveRoomUsers (roomId, callback) {
  return db
    .collection('rooms')
    .doc(roomId)
    .collection('users')
    .onSnapshot(function (snapshot) {
      const users = snapshot.docs.map((doc) => doc.data())

      callback(users)
    })
}

export function createRoom ({ user, name, description }) {
  return db
    .collection('rooms')
    .add({
      name,
      description
    })
    .then((roomRef) => addUserToRoom({ user, roomId: roomRef.id }))
}

export function isUserInRoom ({ userId, roomId }) {
  return db
    .collection('rooms')
    .doc(roomId)
    .collection('users')
    .doc(userId)
    .get()
    .then((doc) => doc.exists)
}
