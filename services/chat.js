import firebase from './client'
import 'firebase/firestore'

const db = firebase.firestore()

export function sendMessage ({ roomId, message, user }) {
  const roomRef = db.collection('rooms').doc(roomId).collection('messages')

  return roomRef.add({
    user,
    message,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date())
  })
}

export function getMessages ({ startAfter, roomId }) {
  const messagesRef = db
    .collection('rooms')
    .doc(roomId)
    .collection('messages')
    .limit(25)
    .orderBy('createdAt', 'desc')
    .startAfter(startAfter)

  return messagesRef.get().then((documentSnapshots) => {
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
    const messages = documentSnapshots.docs.map(mapMessageFromFirebase)
    return { lastVisible, messages }
  })
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
  return db
    .collection('rooms')
    .doc(roomId)
    .get()
    .then(mapRoomFromFirebase)
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
  return db.collection('rooms').doc(roomId).onSnapshot(function (snapshot) {
    const users = snapshot.data().users

    callback(users)
  })
}
