import { useState } from 'react'
import { useRouter } from 'next/router'

import RoomAside from 'components/RoomAside'
import HomeAside from 'components/HomeAside'

function Aside () {
  const router = useRouter()
  const roomId = router.query.id
  const [aside, setAside] = useState(Boolean(roomId))

  const changeAside = () => {
    setAside((prevAside) => !prevAside)
  }

  return (
    <aside>
      <div className="Aside-Content">
        {aside && roomId ? <RoomAside changeAside={changeAside} roomId={roomId} /> : <HomeAside />}
      </div>
      <style jsx>{`
        aside {
          width: 30%;
          position: relative;
          background: var(--dark-main-color);
        }

        .Aside-Content {
          width: 85%;
          height: 90%;
          margin: auto;
        }
      `}</style>
    </aside>
  )
}

export default Aside
