import Head from 'next/head'
import isAuthenticated from 'hoc/isAuthenticated'

function Home () {
  return <>
    <Head>
      <title>Home</title>
    </Head>

  </>
}

export default isAuthenticated(Home)
