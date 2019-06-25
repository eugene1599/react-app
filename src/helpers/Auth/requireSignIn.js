import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

const LOGIN_PATH =  '/login'

const requireSignIn = Component =>
  compose(
    withRouter,
    connect(state => ({ authUser: state.reduxTokenAuth.currentUser })),
  )(({ authUser, ...props }) => {
    useEffect(() => {
      if (!authUser.isSignedIn && !authUser.isLoading) props.history.push(LOGIN_PATH)
    }, [authUser])
    return authUser ? <Component {...props} /> : null
  })

export { requireSignIn }
