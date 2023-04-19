import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
function App() {

  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log(`You have clicked the button ${count} times`);
  },[count])

  const [count2,setCount2]=useState(0);

  useEffect(()=>{
    console.log(`You have clicked the button ${count2} times`);
  },[count2])
  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}>Click Me</button>
      <h1>You have clicked for {count} times</h1>
      <button onClick={()=>setCount2(count2+1)}>Click Me</button>
      <h1>You have clicked for {count2} times</h1>
    </div>
  );
}

export default App;
