
import './App.css';
import {useState} from 'react';
function App() {
  const [name,setName]=useState('Abhinandan');

  const changeName=()=>{
      setName("Jagruth");
  }
  return (
   
          <div className='App'>
            <p>My name is {name}</p>
            <hr/>
            <button onClick={changeName}>Change Name</button>
          </div>
  );
}

export default App;
