import './App.css';
import { Component, useState } from 'react';

function App(){
  const [count,setCount] =useState(0);
  const onclick=()=>{
  setCount(count+1);
}
    return (
      <div className="App">
        <button id='ClickMe' className='click-me' onClick={onclick}>Click Me</button>
        <p>You clicked the button {count} times</p>
      </div>
    );
  }

  // class App extends Component{
  //   constructor(props){
  //     super(props);
  //     this.state={
  //       cnt:0
  //     };
  //   }
  //   render(){
  //     return(
  //       <div>
  //         <button id='ClickMe' className='click-me' onClick={this.setState({cnt:this.state.cnt+1})}>Click Me</button>
  //         <p>You clicked the button::{this.state.cnt} times</p>
  //       </div>
  //     )
  //   }
  // }
export default App;
