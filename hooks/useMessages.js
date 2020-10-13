import { useState, useEffect } from 'react'

import { getMessages, getLiveMessages } from 'services/chat'

function useMessages (roomId) {
  const [page, setPage] = useState(0)
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [startAfter, setStartAfter] = useState('')

  useEffect(() => {
    if (startAfter || startAfter === '') {
      setLoading(true)
      getMessages({ startAfter, roomId }).then(({ lastVisible, messages }) => {
        setStartAfter(lastVisible)
        page === 0 && messages.shift()
        setMessages((prevMessages) => messages.concat(prevMessages))
        setLoading(false)
      })
    }
  }, [page])

  useEffect(() => {
    const unsuscribe = getLiveMessages(roomId, (newMessages) => {
      setMessages((prevMessages) => prevMessages.concat(newMessages))
    })

    return () => unsuscribe()
  }, [])

  return { setPage, messages, loading }
}

export default useMessages
