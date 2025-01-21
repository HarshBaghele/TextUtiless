import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  //  const [col, setCol]= useState({
  //   color:'black',
  //   backgroundColor:'white',
  //  });
//    document.body.style.backgroundColor=col;
//   //  document.querySelector('.')
//    let handelChange2 = (event) => {
//     setCol(event.target.value);
// }
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
  <Link className="nav-link" to="/">TextUtiles</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current='page' to='/about'>About us</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <div className="main"><h4>{props.mode==='light'?'Dark mode':'Light mode'}</h4></div>
    </div>
    </div>
  </div>
</nav>
  </>
  )
}
