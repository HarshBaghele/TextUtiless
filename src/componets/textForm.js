import React,{useState} from 'react'

export default function TextForm(props) {
    let handel = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
        if(text!==" ") {
          props.showAlert("Text converted to upper case", 'success')
        } else {
          props.showAlert("Please Enter Some Text In Text Area", 'danger')
        }
    }
    let handel2 = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
        if(text===" ") {
          props.showAlert("Please Enter Some Text In Text Area", 'danger')
        } else {
          props.showAlert("Text converted to lower case", 'success')
        }
    }
    let handel3 = () => {
      if(text!=="") {
        let randomnumnber = Math.floor(Math.random() *100)+1;
        let newText = '@'+text+randomnumnber+'.gmail.com';
        setText(newText);
        if(text!==" ") {
          props.showAlert("Text converted to upper case", 'success')
        } else {
          props.showAlert("Please Enter Some Text In Text Area", 'danger')
        }
      }
    }
    let handel4 = () => {
      setText("");
  }
    let handelChange = (event) => {
        setText(event.target.value);
    }
    let handelspeak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text= text;
      window.speechSynthesis.speak(msg);
    }
    let handelCopy = () => {
      let text = document.getElementById('mybox');
      text.select();
      navigator.clipboard.writeText(text.value)
      if(text!==" ") {
        props.showAlert("Text copied to clipbord", 'success')
      } else {
        props.showAlert("Please Enter Some Text In Text Area", 'danger')
      }
    }
    let handelExtra = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Succesfully remove extra spaces from text area", 'success')
    }
    const [text, setText]= useState(" ");
  return (
    <>
<div className="mb-3">
  <label htmlFor="Mybox" className="form-label" data-bs-theme='dark'  style={{color:props.mode==='dark'?'white':'#042743'}}>Enter the text to analyze bellow</label>
  <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handelChange}  style={{backgroundColor:props.mode==='light'?'white':'#212529', color:props.mode==='light'?'black':'white'}}></textarea>
  <button disabled={text.length===0} id='Btn1' className="btn btn"onClick={handel}  style={{color:props.mode==='dark'?'white':'black'}}>Convert to uppercase</button>
  <button disabled={text.length===0}   id='Btn2' className="btn btn"onClick={handel2}  style={{color:props.mode==='dark'?'white':'black'}}>Convert to Lowercase</button>
  <button disabled={text.length===0}  id='Btn2' className="btn btn"onClick={handel3} style={{color:props.mode==='dark'?'white':'black'}}>Convert to Email user Name</button>
  <button disabled={text.length===0}  id='Btn2' className="btn btn"onClick={handel4}  style={{color:props.mode==='dark'?'white':'black'}}>Clear text area</button>
  <button disabled={text.length===0}  id='Btn2' className="btn btn"onClick={handelspeak}  style={{color:props.mode==='dark'?'white':'black'}}><i class='bx bxs-volume-full' style={{color:props.mode==='dark'?'white':'black'}}></i></button>
  <button disabled={text.length===0}  id='Btn2' className="btn btn"onClick={handelCopy}  style={{color:props.mode==='dark'?'white':'black'}}>Copy Text</button>
  <button disabled={text.length===0}  id='Btn3' className="btn btn"onClick={handelExtra}  style={{color:props.mode==='dark'?'white':'black'}}>Remove extra speces</button>
</div>
<div className="container">
  <h1>Your text summery</h1>
  <p>Total words <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Total Characters <b>{text.length}</b></p>
  <p><b>{text===""?0:0.008*text.split(" ").length}</b> Minutes to read</p>
</div> 
</>
  )
}
