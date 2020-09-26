import { loginWithGitHub, loginWithGoogle, loginWithTwitter } from 'services/firebase/client'

function Login () {
  const handleGithubClick = () => {
    loginWithGitHub().then(user => {
      console.log(user)
    }).catch(err => console.log(err))
  }
  const handleTwitterClick = () => {
    loginWithTwitter().then(user => {
      console.log(user)
    }).catch(err => console.log(err))
  }
  const handleGoogleClick = () => {
    loginWithGoogle().then(user => {
      console.log(user)
    }).catch(err => console.log(err))
  }

  return <div>
    <div className="bg-gray-200" onClick={handleGithubClick}>Login with GitHub</div>
    <button onClick={handleTwitterClick} >Login with Twitter</button>
    <button onClick={handleGoogleClick} >Login with Google</button>
  </div>
}

export default Login
