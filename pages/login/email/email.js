import Router from 'next/router'
import { isSignInWithEmailLink } from 'services/firebase/client'

import useRedirectOnAuth from 'hooks/useRedirectOnAuth'
function Email () {
  useRedirectOnAuth()
  return <div>
        Hiiiii
  </div>
}

export function getServerSideProps ({ req, res }) {
  const url = req?.url || window?.location?.href

  if (!isSignInWithEmailLink(url)) {
    typeof window !== 'undefined'
      ? Router.push('/')
      : res.writeHead(302, { Location: '/' }).end()
  }
  return { props: {} }
}

export default Email
