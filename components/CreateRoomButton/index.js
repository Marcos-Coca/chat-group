import { memo, useState } from 'react'
import CreateRoomModal from 'components/CreateRoomModal'

import styles from './styles'

function CreateRoomButton () {
  const [show, setShow] = useState(false)

  const onClose = () => {
    setShow(false)
  }

  return (
    <>
      <button className="Create-Button" onClick={() => setShow(true)}>
        +
      </button>
      {show && <CreateRoomModal onClose={onClose}/>}
      <style jsx>{styles}</style>
    </>
  )
}

export default memo(CreateRoomButton, () => true)
