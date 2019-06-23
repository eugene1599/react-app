import React from 'react';

function MainLayout(props) {
  return (
    <React.Fragment>
      <main role="main" className="container" style={{ marginTop: '100px'}}>
        <div className="row justify-content-md-center">
          <div className="col-6">
            { props.children }
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default MainLayout;
