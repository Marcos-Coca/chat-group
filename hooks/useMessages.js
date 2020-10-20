import { useState, useEffect, useCallback } from 'react'

import { messagesGetter, getLiveMessages } from 'services/chat'

function useMessages (roomId) {
  const [page, setPage] = useState(0)
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const getMessages = useCallback(messagesGetter({ roomId }), [roomId])

  useEffect(() => {
    setLoading(true)
    getMessages().then((messages) => {
      const orderedMessages = messages.reverse()
      page === 0 && orderedMessages.pop()
      setMessages((prevMessages) => messages.concat(prevMessages))
      setLoading(false)
    })
  }, [page, roomId])

  useEffect(() => {
    setMessages([])
    setPage(0)
  }, [roomId])

  useEffect(() => {
    const unsuscribe = getLiveMessages(roomId, (newMessages) => {
      setMessages((prevMessages) => prevMessages.concat(newMessages))
    })

    return () => unsuscribe()
  }, [roomId])

  return { setPage, messages, loading }
}

export default useMessages
