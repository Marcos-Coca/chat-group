import { useState, useEffect } from 'react'

import { getMessages } from 'services/chat'

function useMessages (roomId) {
  const [page, setPage] = useState(0)
  const [messages, setMessages] = useState([])
  const [startAfter, setStartAfter] = useState('')

  useEffect(() => {
    getMessages({ startAfter, roomId }).then(({ lastVisible, messages }) => {
      setStartAfter(lastVisible)
      setMessages((prevMessages) => prevMessages.concat(messages))
    })
  }, [page])

  return { setPage, messages }
}

export default useMessages
