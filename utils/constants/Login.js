
import { LOGIN_OPTIONS } from 'utils/constants/loginOptions'

import {
  loginWithGitHub,
  loginWithGoogle,
  loginWithTwitter,
  loginWithFacebook,
  loginWithEmail
} from 'services/auth'

export const LOGIN = {
  [LOGIN_OPTIONS.GitHub]: loginWithGitHub,
  [LOGIN_OPTIONS.Google]: loginWithGoogle,
  [LOGIN_OPTIONS.Twitter]: loginWithTwitter,
  [LOGIN_OPTIONS.Facebook]: loginWithFacebook,
  [LOGIN_OPTIONS.Email]: loginWithEmail
}
