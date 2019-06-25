import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

const HOME_PATH =  '/'

const requireLogOut = Component =>
  compose(
    withRouter,
    connect(state => ({ authUser: state.reduxTokenAuth.currentUser })),
  )(({ authUser, ...props }) => {
    useEffect(() => {
      if (authUser.isSignedIn) props.history.push(HOME_PATH)
    })
    return authUser ? <Component {...props} /> : null
  })

export { requireLogOut }
