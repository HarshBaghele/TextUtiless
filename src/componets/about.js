 import React from 'react'

 export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  let myStyle = {
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#212529':'white',
  }
   return (
      <>
      <div className="container">
      <h1 id='about11' style={{color:props.mode==='dark'?'white':'#042743'}}>About as</h1>
      <div className="accordion" id="accordionExample" style={myStyle} >
      <div className="accordion-item" style={myStyle}  >
        <h2 className="accordion-header" style={myStyle} >
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}  >
            Accordion Item #1
          </button>
      </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle} >
          <div className="accordion-body" style={myStyle} >
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees tprops.hat we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting tprops.hat just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    <div className="accordion-item" style={myStyle} >
      <h2 className="accordion-header" style={myStyle} >
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}  >
            Accordion Item #2
    </button>
      </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle} >
          <div className="accordion-body" style={myStyle}  >
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees tprops.hat we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting tprops.hat just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle} >
        <h2 className="accordion-header" style={myStyle} >
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}  >
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
          <div className="accordion-body" style={myStyle}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees tprops.hat we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting tprops.hat just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
   )
 }
