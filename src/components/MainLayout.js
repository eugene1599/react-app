import React from 'react'
import Navbar from './Shared/Navbar'

function MainLayout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <main role="main" className="container" style={{ marginTop: '100px'}}>
        { props.children }
      </main>
    </React.Fragment>
  )
}

export default MainLayout
