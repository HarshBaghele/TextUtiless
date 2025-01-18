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
       document.body.style.backgroundColor='black';
       document.body.style.color='white';
       document.querySelector('h4').innerHTML="Enabel light-mode";
       showAlert("Dark mode has been enabel", "success")
       document.title='Text-utiles-dark-mode';
    } else {
       setMode('light');
            document.body.style.backgroundColor='white';
       document.body.style.color='black';
       document.querySelector('h4').innerHTML="Enabel dark-mode";
       showAlert("light mode has been enabel", "success")
       document.title='Text-utiles-light-mode'
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar mode={mode} toggle={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
        <Route exact path='/about' element={<About/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/home' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;
