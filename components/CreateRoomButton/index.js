import { useState } from 'react'

function CreateRoomButton() {
  const [show, setShow] = useState('false')
  const [roomName, setRoomName] = useState('')
  const [roomDescription, setRoomDescription] = useState('')

  const handleNameChange = (e)=>{
      const value = e.target.value
      setRoomName(value)
  }

  const handleDescriptionChange = (e)=>{
      const value = e.target.
  }

  return (
    <>
      <button></button>
      {show && (
        <div className="Modal">
          <div className="Modal-Content">
            <span className="Modal-Return" />
            <h3>NEW ROOM</h3>
            <form>
              <input type="text" placeholder="Room name" max="16" min="4" value={roomName} />
              <textarea minLength="10" maxLength="50" placeholder="Room description" value={roomDescription} />
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateRoomButton
