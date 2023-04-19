import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userName, setUserName] = useState("")
  const userNameChanged=(e)=>{
    setUserName(e.target.value);
  }

  return (
    <div className="App">
     <div>UserName:{userName}</div>
     <input name="user-name" onChange={userNameChanged}></input>
    </div>
  )
}

export default App
