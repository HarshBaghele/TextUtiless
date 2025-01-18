import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';


export default function Navbar(props) {
   const [col, setCol]= useState({
    color:'black',
    backgroundColor:'white',
   });
   document.body.style.backgroundColor=col;
  //  document.querySelector('.')
   let handelChange2 = (event) => {
    setCol(event.target.value);
}
  return (
    <>
    <nav className="navbar" data-bs-theme={props.mode} Style={col}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">My first react app</Link>
    <Link className="nav-link" aria-current='page' to='/home'>Home</Link>
    <Link className="nav-link" aria-current='page' to='/about'>About us</Link>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <div className="main"><h4>Enabel dark-mode</h4></div>
     </div>
     <div className="ma">
     <p id='brppm'>Select color to change backgroundColor</p>
      <input type="color" name="" id="input1" value={col} onChange={handelChange2}/>
     </div>
  </div>
</nav>
  </>
  )
}
