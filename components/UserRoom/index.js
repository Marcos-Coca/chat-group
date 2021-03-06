import { useRouter } from 'next/router'

import styles from './styles'
function getRoomLogo (name) {
  const spaceIndex = name.indexOf(' ') + 1

  if (spaceIndex) {
    return `${name[0]}${name[spaceIndex]}`
  }
  return name[0]
}

function UserRoom ({ room, changeAside }) {
  const router = useRouter()

  function handleClick () {
    const currentRoom = router.query.id

    currentRoom === room.id ? changeAside() : router.push(`/rooms/${room.id}`)
  }

  return (
    <div className="Room-Container" onClick={handleClick}>
      <div className="Room-Logo">{getRoomLogo(room.name)}</div>
      <span className="Room-Name">{room.name}</span>
      <style jsx>{styles}</style>
    </div>
  )
}

export default UserRoom
