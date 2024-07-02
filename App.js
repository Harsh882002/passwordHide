import './App.css'
import './pass.css'
import { useState } from 'react'
import btnModule from './Button.module.css'

function App() {

  let [status, setStatus] = useState(false);

  let [pstatus, setPstatus] = useState(false);

  return (
    <div className="App">

      <input type={pstatus ? 'text' : 'password'}  />

      <button onClick={() => setPstatus(!pstatus)}>{pstatus ? "Hide" : "Show"}</button>




    </div >
  );
}






export default App;
