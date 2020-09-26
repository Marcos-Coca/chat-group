import { loginWithGitHub, loginWithGoogle, loginWithTwitter } from 'services/firebase/client'

function Login () {
  const handleGithubClick = () => {
    loginWithGitHub().then(user => {
      console.log(user)
    }).catch(err => console.log(err))
  }

  return <div>
    <button onClick={handleGithubClick}>Login with GitHub</button>
    <button>Login with Twitter</button>
    <button>Login with Google</button>
  </div>
}

export default Login
