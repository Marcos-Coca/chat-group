import {
  loginWithGitHub,
  loginWithGoogle,
  loginWithTwitter,
  loginWithFacebook,
  loginWithEmail
} from 'services/firebase/client'

import styles from './styles'
import Email from 'components/Icons/Email'
import GitHub from 'components/Icons/GitHub'
import Google from 'components/Icons/Google'
import Twitter from 'components/Icons/Twitter'
import Facebook from 'components/Icons/Facebook'
import useRedirectOnAuth from 'hooks/useRedirectOnAuth'

function Login () {
  useRedirectOnAuth()

  const handleGithubClick = () => {
    loginWithGitHub()
      .then((user) => {
        console.log(user)
      })
      .catch((err) => console.log(err))
  }
  const handleTwitterClick = () => {
    loginWithTwitter()
      .then((user) => {
        console.log(user)
      })
      .catch((err) => console.log(err))
  }
  const handleGoogleClick = () => {
    loginWithGoogle()
      .then((user) => {
        console.log(user)
      })
      .catch((err) => console.log(err))
  }
  const handleFacebookClick = () => {
    loginWithFacebook()
      .then((user) => {
        console.log(user)
      })
      .catch((err) => console.log(err))
  }

  const handleEmailClick = () => {
    const email = prompt('Introduce Tu Email')
    loginWithEmail(email)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <main>
        <h1>Chat Group</h1>
        <h3>Create an account and chat</h3>
        <div className="container-login">
          <button onClick={handleEmailClick}>
            <Email height={24} width={24}/>
            <span>Sign in with Email</span>
          </button>
          <button onClick={handleGoogleClick}>
            <Google height={24} width={24} />
            <span>Sign in with Google</span>
          </button>

          <button onClick={handleTwitterClick}>
            <Twitter fill="#fff" height={24} width={24} />
            <span>Sign in with Twitter</span>
          </button>

          <button onClick={handleGithubClick}>
            <GitHub height={24} width={24} fill="#fff" />
            <span>Sign in with GitHub</span>
          </button>

          <button onClick={handleFacebookClick}>
            <Facebook fill="#fff" height={24} width={24} />
            <span>Sign in with Facebook</span>
          </button>

        </div>
      </main>

      <style jsx>{styles}</style>
    </div>
  )
}

export default Login
