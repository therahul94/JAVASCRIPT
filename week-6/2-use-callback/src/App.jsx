import { useState } from 'react'
import './App.css'
import { Assignment1 } from './components/Assignment1'
import { Assignment2 } from './components/Assignment2'

function App() {
  const [change, setChange] = useState(0);
  setInterval(()=>{
    setChange(change+1);
  }, 10000);
  return (
    <>
      {/* <Assignment1 /> */}
      <Assignment2 />
    </>
  )
}

export default App
