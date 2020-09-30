import Router from 'next/router'
import { useEffect, useState } from 'react'

import EmailPopUp from 'components/EmailPopUp'
import { isSignInWithEmailLink, signInWithEmailLink } from 'services/firebase/client'

import useRedirectOnAuth from 'hooks/useRedirectOnAuth'
function Email () {
  const [email, setEmail] = useState()
  const [tries, setTries] = useState(0)
  useRedirectOnAuth()

  const onSubmit = (formEmail) => {
    signInWithEmailLink(formEmail, window.location.href)
      .then(() => setEmail(formEmail))
      .catch((e) => setTries((currentTries) => setTries(currentTries + 1)))
  }

  useEffect(() => {
    if (email || tries === 3) {
      Router.replace('/login')
    }
  }, [email, tries])

  useEffect(() => {
    const emailStored = window.localStorage.getItem('emailForSignIn')

    if (emailStored) {
      signInWithEmailLink(emailStored, window.location.href)
        .then(() => window.localStorage.removeItem('emailForSignIn'))
        .then(() => setEmail(emailStored))
        .catch((err) => console.log(err))
    }
  }, [])

  return (
    !email && (
      <EmailPopUp
        show={true}
        setShow={() => {}}
        onSubmit={onSubmit}
        title="Confirm Email"
        text="Please provide your email for confirmation"
        isWrong={Boolean(tries)}
        wrongMessage={'Wrong Email. Please Try Again'}
      />
    )
  )
}

export function getServerSideProps ({ req, res }) {
  const url = req?.url || window?.location?.href

  if (!isSignInWithEmailLink(url)) {
    typeof window !== 'undefined' ? Router.push('/') : res.writeHead(302, { Location: '/' }).end()
  }
  return { props: {} }
}

export default Email
