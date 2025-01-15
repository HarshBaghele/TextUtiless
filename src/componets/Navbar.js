import React from 'react'
// import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">My first react app</a>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <div className="main"><h4>Enabel dark-mode</h4></div>
     </div>
  </div>
</nav>
  </>
  )
}
    