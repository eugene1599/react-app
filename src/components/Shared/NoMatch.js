import React from 'react'

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        404 Not found <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

export default NoMatch
