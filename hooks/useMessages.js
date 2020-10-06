import { useState, useEffect } from 'react'

import { getMessages, getLiveMessages } from 'services/chat'

function useMessages (roomId) {
  const [page, setPage] = useState(0)
  const [messages, setMessages] = useState([])
  const [startAfter, setStartAfter] = useState('')

  useEffect(() => {
    getMessages({ startAfter, roomId }).then(({ lastVisible, messages }) => {
      setStartAfter(lastVisible)
      page === 0 && messages.shift()
      setMessages((prevMessages) => messages.concat(prevMessages))
    })
  }, [page])

  useEffect(() => {
    const unsuscribe = getLiveMessages(roomId, (newMessages) => {
      setMessages((prevMessages) => prevMessages.concat(newMessages))
    })

    return () => unsuscribe()
  }, [])

  return { setPage, messages }
}

export default useMessages
