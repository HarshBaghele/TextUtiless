// import logo from './logo.svg';
import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/textForm';
import Alert from './componets/Alert';
import About from './componets/about';

function App() {
  let[alert, setAlert] = useState(null);
  const[mode, setMode] = useState("light");
  const showAlert = (message, type) => {
    setAlert({
      mag:message,
      type:type
    })
    setTimeout(()=> {
      setAlert(null)
    },1500)
  }
  const toggleMode =()=> {
    if(mode==='light') {
       setMode('dark');
       document.body.style.backgroundColor='#262626';
       document.body.style.color='white';
       showAlert("Dark mode has been enabel", "success")
    } else {
       setMode('light');
       document.body.style.backgroundColor='white';
       document.body.style.color='black';
       showAlert("light mode has been enabel", "success")
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar mode={mode} toggle={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
        <Route exact path='/about' element={<About mode={mode}/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}
export default App;
