import {
  loginWithGitHub,
  loginWithGoogle,
  loginWithTwitter,
  loginWithFacebook,
  loginWithEmail,
  testEmailLogin
} from 'services/firebase/client'

import { useEffect } from 'react'
import Email from 'components/Icons/Email'
import GitHub from 'components/Icons/GitHub'
import Google from 'components/Icons/Google'
import Twitter from 'components/Icons/Twitter'
import Facebook from 'components/Icons/Facebook'
import useUser from 'hooks/useUser'

function Login () {
  const user = useUser()
  console.log(user)

  useEffect(() => {
    testEmailLogin()
  }, [])

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

      <style jsx>{`
      .container{
        height:100vh;
        display:flex;
        align-items:center;
      }
        main {
          width: 70%;
          height:70vh;
          margin: auto;
          max-width:1260px;
          max-height:750px;
          text-align:center;
          color:var(--font-main-color);
          background: var(--main-color);
          border-radius:0.75rem;
        }

        h3{
          color:var(--font-second-color);
        }

        .container-login {
          width: 70%;
          margin: 2.5rem auto;
          display: grid;
          gap: 0.6rem;
          grid-template-areas:
            "email email"
            'google twitter'
            'facebook github';
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(3,50px);
        }
        button {
          width: 100%;
          margin: auto;
          border: none;
          height: 50px;
          display: flex;
          padding: 12px;
          cursor: pointer;
          min-width:230px;
          font-weight: 600;
          align-items: center;
          font-size: 1.125rem;
          border-radius: 0.5rem;
          justify-content: center;
        }

        button > span {
          margin-left: 12px;
        }

        button:nth-of-type(1){
          grid-area:email;
          background:#fff;
        }

        button:nth-of-type(2) {
          grid-area: google;
          background: #fff;
        }
        button:nth-of-type(3) {
          grid-area: twitter;
          background: #00c4f5;
          color: var(--font-main-color);
        }
        button:nth-of-type(4) {
          grid-area: github;
          background: #2b353b;
          color: var(--font-main-color);
        }

        button:nth-of-type(5){
          grid-area:facebook;
          background: #1877f2;
          color: var(--font-main-color);

        }

        @media(max-width:1000px){
          main{
            width:100%;
          }          
        }

        @media(max-width:650px){
          .container-login{
            width:100%;
            display:block;
          }
          button{
            max-width:300px;
            margin:10px auto;
          }
          main{
            height:auto;
          }
        }
      `}</style>
    </div>
  )
}

export default Login
