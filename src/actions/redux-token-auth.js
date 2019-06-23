import { generateAuthActions } from 'redux-token-auth'
import { authUrl } from '../constants/auth'
import { toastr } from '../helpers'
import history from '../utils/history'
import store from '../store';

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
