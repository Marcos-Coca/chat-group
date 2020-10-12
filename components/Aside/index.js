import { useRouter } from 'next/router'

import RoomAside from 'components/RoomAside'

function Aside () {
  const router = useRouter()
  const roomId = router.query.id

  return <aside>
    <div className="Aside-Content">
      {roomId && <RoomAside roomId={roomId} />}
    </div>
    <style jsx>{`
        aside{
          width:30%;
          position:relative;
          background: var(--dark-main-color);
        }

        .Aside-Content{
          width:85%;
          height:90%;
          margin:auto;
        }

      `}</style>
  </aside>
}

export default Aside
