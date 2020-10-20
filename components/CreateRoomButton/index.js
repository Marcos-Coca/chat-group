import { useState } from 'react'

import Loader from 'components/Loader'

import useUser from 'hooks/useUser'
import useInput from 'hooks/useInput'
import { createRoom } from 'services/chat'

import styles from './styles'

function CreateRoomButton () {
  const user = useUser()
  const [name, setName] = useInput('')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useInput('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    createRoom({ user, name, description }).then(() => {
      setLoading(false)
      onClose()
    })
  }

  const onClose = () => {
    setShow(false)
  }

  return (
    <>
      <button className="Create-Button" onClick={() => setShow(true)}>
        +
      </button>
      {show && (
        <div className="Modal">
          <div className="Modal-Content">
            {loading ? <Loader/> : <>
              <span onClick={onClose} className="Modal-Return" />
              <form onSubmit={handleSubmit}>
                <h3>NEW ROOM</h3>
                <input required type="text" placeholder="Room name" maxLength="16" minLength="4" value={name} onChange={setName} />
                <textarea
                  required
                  maxLength="80"
                  placeholder="Room description"
                  value={description}
                  onChange={setDescription}
                />
                <button className="button">Save</button>
              </form>
            </>}
          </div>
        </div>
      )}
      <style jsx>{styles}</style>
    </>
  )
}

export default CreateRoomButton
