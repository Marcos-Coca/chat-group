/* eslint-disable space-before-function-paren */
import { useState } from 'react'
function EmailPopUp({ text, title, onSubmit, show, setShow }) {
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
            <span onClick={onClose} className="modal-return"/>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="yourname@example.com"
                onChange={handleChange}
              />
              <div className="modal-buttons">
                <button onClick={onClose}>Close</button>
                <button disabled={!email}>Send</button>
              </div>
            </form>
          </div>
          <style jsx>{`
            .modal {
              top: 0;
              left: 0;
              width: 100%;
              height: 100vh;
              position: fixed;
              background: rgba(9, 10, 11, 0.75);
            }
            .modal-content {
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              margin: auto;
              padding: 2.5rem;
              max-width: 600px;
              text-align: left;
              position: absolute;
              height: fit-content;
              font-size: 1.125rem;
              background: var(--main-color);
            }

            .modal-return {
              top:0;
              right:3%;
              cursor:pointer;
              position:absolute;
            }

            .modal-return:after {
              font-size:40px;
              content:'${'\\00D7'}';
            }

            .modal-buttons {
              margin: 2rem 0;
              text-align: right;
            }

            label {
              display: block;
              font-weight: bold;
              margin-bottom: 0.8rem;
            }
            h3 {
              margin: 0;
              font-size: 23px;
              margin-bottom: 11px;
            }

            p {
              margin-bottom: 23px;
            }
            input {
              width: 100%;
              height: 50px;
              font-size: 18px;
              overflow: hidden;
              border-radius: 6px;
              margin-bottom: 1rem;
              padding: 0.6rem 0.56rem;
              color: var(--font-main-color);
              background-color: var(--dark-main-color);
              border: 1px solid var(--font-second-color);
            }

            input:focus {
              border-color: var(--main-color);
            }

            button {
              width: 90px;
              height: 36px;
              border: none;
              cursor: pointer;
              font-size: 1rem;
              font-weight: bold;
              border-radius: 0.5rem;
              color: var(--main-color);
              background: var(--font-main-color);
            }

            button:disabled {
              opacity: 0.7;
              cursor: default;
            }

            button:first-child {
              background: transparent;
              color: var(--font-main-color);
            }
          `}</style>
        </div>
      )}
    </>
  )
}

export default EmailPopUp
