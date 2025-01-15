// import logo from './logo.svg';
import React, { useState } from 'react';


import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/textForm';

function App() {
  const[mode, setMode] = useState("light");
  const toggleMode =()=> {
    if(mode==='light') {
       setMode('dark');
       document.body.style.backgroundColor='black';
       document.body.style.color='white';
       document.querySelector('h4').innerHTML="Enabel light-mode"
    } else {
       setMode('light');
       document.body.style.backgroundColor='white';
       document.body.style.color='black';
        document.querySelector('h4').innerHTML="Enabel dark-mode"
    }
  }
  return (
    <>
<Navbar title="React Js" About="About us" joo="Contact" mode={mode} toggle={toggleMode}/>
<div className="container">
<TextForm text = "Enter Your Text Below"/>
</div>
</>
  );
}
export default App;
  