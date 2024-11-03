import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0);
  


  function increment(){
    setCount(count + 1);
  }

  function decrement(){
    setCount(count - 1);
  }
  function reset(){
    setCount(0);
  }

  return (
    <div className='content'>
      <div className="header"><i className="fa-solid fa-hand-pointer"></i>Clicker</div>
      <div className="container">
        <div className="count">
          <h2>{count}</h2>
          <div className="buttons">
            <div className="increment" onClick={increment}><i className="fa-solid fa-plus"></i></div>
            <div className="reset" onClick={reset}><i className="fa-solid fa-arrows-rotate"></i></div>
            <div className="decrement" onClick={decrement}><i className="fa-solid fa-minus"></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
