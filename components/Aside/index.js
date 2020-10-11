import { useRouter } from 'next/router'

import RoomAside from 'components/RoomAside'

function Aside () {
  const router = useRouter()
  const roomId = router.query.id

  return <aside>
    <RoomAside roomId={roomId} />
  </aside>
}

export default Aside
