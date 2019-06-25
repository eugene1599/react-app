import { generateAuthActions } from 'redux-token-auth'
import { authUrl } from '../constants/auth'
import store from '../store'

const config = {
  authUrl,
  userAttributes: {
    email: 'email'
  },
  userRegistrationAttributes: {
    email: 'email'
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

function signOutAction(){
  store.dispatch(signOutUser())
}

export {
  registerUser,
  signInUser,
  signOutUser,
  signOutAction,
  verifyCredentials,
}
