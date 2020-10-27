import Head from 'next/head'

import Room from 'components/Room'
import { getRoom } from 'services/chat'
import isAuthenticated from 'hoc/isAuthenticated'

function Rooms ({ room, user }) {
  return <>
    <Head>
      <title>{room.name}</title>
    </Head>
    <Room room={room} user={user} />
  </>
}

export async function getServerSideProps (context) {
  try {
    const { id } = context.params
    const room = await getRoom(id)
    if (!room.id) return { props: { room: null, statusCode: 404 } }

    return { props: { room, statusCode: 200 } }
  } catch (e) {
    return { props: { room: null, statusCode: 503 } }
  }
}

export default isAuthenticated(Rooms)
