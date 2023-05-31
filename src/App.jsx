import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("")
  
 let buttons=document.querySelectorAll(".buttons")
 Array.from(buttons).map((button)=>{
  button.addEventListener('click',(e)=>{
   
      if(e.target.innerHTML=="="){
        try {
          const evaluatedvalue= eval(number)
          setNumber(evaluatedvalue.toString())
        }catch(error){
          setNumber("")
        }
         
         
      }
      else if(e.target.innerHTML=="C"){
        
        setNumber("")
      }
      else{
        // string=string+e.target.innerHTML
         setNumber(number + e.target.innerHTML)
      }
  })
 })
 
  // for(let i=0; i<16; i++){
  //   return (buttons[i].addEventListener('click',(e)=>{
  //     setNumber(e.target.value)
  //   }))
  // }
  
  
  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          {number}
        </div>
        <div className="numbers">
          <button className="buttons">7</button>
          <button className="buttons">8</button>
          <button className="buttons">9</button>
          <button className="buttons">C</button>
          <button className="buttons">4</button>
          <button className="buttons">5</button>
          <button className="buttons">6</button>
          <button className="buttons">*</button>
          <button className="buttons">1</button>
          <button className="buttons">2</button>
          <button className="buttons">3</button>
          <button className="buttons">/</button>
          <button className="buttons">0</button>
          <button className="buttons">+</button>
          <button className="buttons">_</button>
          <button className="buttons">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
