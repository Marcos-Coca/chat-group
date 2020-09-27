import {
  loginWithGitHub,
  loginWithGoogle,
  loginWithTwitter
} from 'services/firebase/client'

import GitHub from 'components/Icons/GitHub'
import Google from 'components/Icons/Google'
import Twitter from 'components/Icons/Twitter'

function Login () {
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

  return (
    <div>
      <main>
        <div className="container">
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
        </div>
      </main>

      <style jsx>{`
        main {
          width: 80%;
          margin: auto;
          background: #3c366b;
        }
        .container {
          width: 70%;
          margin: auto;
          display: grid;
          gap: 0.6rem;
          grid-template-areas:
            'google google'
            'twitter github';
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 60px 60px;
        }
        button {
          width: 100%;
          margin: auto;
          border: none;
          height: 60px;
          display: flex;
          padding: 12px;
          font-weight: 600;
          border-radius: 0.5rem;
          font-size: 1.125rem;
          align-items: center;
          justify-content: center;
        }

        button > span {
          margin-left: 12px;
        }

        button:nth-of-type(1) {
          grid-area: google;
          max-width: 570px;
          background: #fff;
        }
        button:nth-of-type(2) {
          color: #fff;
          max-width: 285px;
          grid-area: twitter;
          background: #00c4f5;
        }
        button:nth-of-type(3) {
          color: #fff;
          max-width: 285px;
          grid-area: github;
          background: #2b353b;
        }
      `}</style>
    </div>
  )
}

export default Login
