import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [calculation,setCalculation]=useState(0)
  
  const onClick=()=>{
      setCount(count+1);
  }
  
  useEffect(()=>{
    setCalculation(count*2)
  },[count])
  
  return (
    <div className="App">
        <button onClick={onClick}>+</button>
        <p>Calculation {calculation}</p>
    </div>
  )
}5

export default App
