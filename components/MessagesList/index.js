import { useEffect, useRef, useCallback } from 'react'

import Loader from 'components/Loader'
import Message from 'components/Message'

import useMessages from 'hooks/useMessages'
import useNearScreen from 'hooks/useNearScreen'

import styles from './styles'

function scrollSetter () {
  let oldScroll
  return (loading, element) => {
    if (loading) {
      oldScroll = element.scrollHeight - element.clientHeight
    } else if (oldScroll) {
      const newScroll = element.scrollHeight - element.clientHeight
      element.scrollTop = newScroll - oldScroll
    }
  }
}

function MessagesList ({ roomId }) {
  const container = useRef(null)
  const [showMessageTop, messageTopRef] = useNearScreen({})
  const [showMessageEnd, messagesEndRef] = useNearScreen({})
  const { messages, setPage, loading } = useMessages(roomId)

  const setScroll = useCallback(scrollSetter(), [roomId])

  useEffect(() => {
    showMessageEnd && messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    setScroll(loading, container.current)
  }, [loading])

  useEffect(() => {
    showMessageTop && !loading && setPage((prevPage) => prevPage + 1)
  }, [showMessageTop])

  return (
    <div className="messages-container" ref={container}>
      <div className="messages-top">
        {loading ? (
          <div className="loader">
            <Loader />
          </div>
        ) : <div ref={messageTopRef} />
        }
      </div>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
      <style jsx>{styles}</style>
    </div>
  )
}

export default MessagesList
