
import './App.css';
import {useState} from 'react';
function App() {
      const [s,sets]=useState('');
      var result=0;
      function aHandler(event){
        sets(event.target.value);
      }
      function calculate(){
        result=eval(s);
      }
      // function sub(a,b){
      //   result.push(a+b);
      // }
      // function mul(a,b){
      //   result.push(a+b);
      // }
      // function div(a,b){
      //   result.push(a+b);
      //}
    //   const aHandler=(event)=>{
    //       seta(event.target.value);
    //   }
    //   const bHandler=(event)=>{
    //     setb(event.target.value);
    // }

      return(
        <div className='App'>
          <input type="text" id="a" name="a" onChange={aHandler}></input>
          {/* <button onClick={ sub(parseInt(a)-parseInt(b))}>Sub</button>
          <button onClick={ mul(parseInt(a)*parseInt(b))}>Mul</button>
          <button onClick={ div(parseInt(a)/parseInt(b))}>Div</button> */}
          <h2>{eval(s)}</h2>
          <button onClick={ ()=>calculate()}>calculate</button>
          
          
        </div>
  )
}

export default App;
