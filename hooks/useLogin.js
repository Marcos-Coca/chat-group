
import { LOGIN_OPTIONS } from 'utils/constants'

import {
  loginWithGitHub,
  loginWithGoogle,
  loginWithTwitter,
  loginWithFacebook,
  loginWithEmail
} from 'services/firebase/client'

export const LOGIN = {
  [LOGIN_OPTIONS.GitHub]: loginWithGitHub,
  [LOGIN_OPTIONS.Google]: loginWithGoogle,
  [LOGIN_OPTIONS.Twitter]: loginWithTwitter,
  [LOGIN_OPTIONS.Facebook]: loginWithFacebook,
  [LOGIN_OPTIONS.Email]: loginWithEmail
}

function useLogin (socialMedia) {
  const login = LOGIN[socialMedia]
  return function (param) {
    login(param)
      .then((user) => {
        console.log(user)
      })
      .catch((err) => console.log(err))
  }
}

export default useLogin
