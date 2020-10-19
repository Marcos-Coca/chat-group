import { useState } from 'react'

import useInput from 'hooks/useInput'

import styles from './styles'

function CreateRoomButton () {
  const [name, setName] = useInput('')
  const [show, setShow] = useState(false)
  const [description, setDescription] = useInput('')

  return (
    <>
      <button className="Create-Button" onClick={() => setShow(true)}>+</button>
      {show && (
        <div className="Modal">
          <div className="Modal-Content">
            <span onClick={() => setShow(false)} className="Modal-Return" />
            <form>
              <h3>NEW ROOM</h3>
              <input type="text" placeholder="Room name" max="16" min="4" value={name} onChange={setName} />
              <textarea
                minLength="10"
                maxLength="50"
                placeholder="Room description"
                value={description}
                onChange={setDescription}
              />
              <button className="button">Save</button>
            </form>
          </div>
        </div>
      )}
      <style jsx>{styles}</style>
    </>
  )
}

export default CreateRoomButton
