/* eslint-disable space-before-function-paren */
import { useState } from 'react'

import styles from './styles'

function EmailPopUp({ text, title, onSubmit, show, setShow, wrongMessage, isWrong }) {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(false)
    onSubmit(email)
  }

  const onClose = () => setShow(false)

  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal-content">
            <h3>{title}</h3>
            <p>{text}</p>
            <span onClick={onClose} className="modal-return" />
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="yourname@example.com"
                onChange={handleChange}
              />
              {isWrong && (
                <div className="Wrong-Message">
                  {wrongMessage}
                </div>
              )}
              <div className="modal-buttons">
                <button type="button" onClick={onClose}>Close</button>
                <button disabled={!email}>Send</button>
              </div>
            </form>
          </div>
          <style jsx>{styles}</style>
        </div>
      )}
    </>
  )
}

export default EmailPopUp
