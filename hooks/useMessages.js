import { useState, useEffect, useCallback } from 'react'

import { messagesGetter, getLiveMessages } from 'services/chat'

function useMessages (roomId) {
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessages, setNewMessages] = useState([])

  const getMessages = useCallback(messagesGetter({ roomId }), [roomId])

  useEffect(() => {
    setLoading(true)
    getMessages().then((messages) => {
      setMessages((prevMessages) => messages.concat(prevMessages))
      setLoading(false)
    }).catch(() => {})
  }, [page, roomId])

  useEffect(() => {
    setMessages([])
    setNewMessages([])
  }, [roomId])

  useEffect(() => {
    try {
      const unsuscribe = getLiveMessages(roomId, setNewMessages)
      return () => unsuscribe()
    } catch {}
  }, [roomId])

  return { setPage, messages: messages.concat(newMessages), loading }
}

export default useMessages
