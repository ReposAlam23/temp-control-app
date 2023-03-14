import { useState } from 'react';
import "./App.css"

function App() {
  const [display, setDisplay] = useState("20")
  
  const handlePlus=()=>{
    if(display==45) return display
    setDisplay(()=>parseInt(display)+1)
  }
  const handleMinus=()=>{
    if(display ==0) return display
    setDisplay(()=>parseInt(display)-1)
  }
  
  return (
    <div className="container">
        <div className="row">
          <div className='circle' style={{background:`rgb(${display*10}, ${display*5}, 0)`}}>{display} &deg;C</div>
        </div>
        <div className='button-holder'>
          <button className='plus' onClick={handlePlus}>+</button>
          <button className='minus' onClick={handleMinus}>-</button>
        </div>
    </div>
  );
}

export default App;
