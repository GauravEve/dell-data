import './App.css';
import {Component} from 'react';
function ArrayRendering(){
  const data=[
    {"State":"Karnataka",
    "Capital":"Bengaluru"},
    {
      "State":"Rajasthan",
    "Capital":"Jaipur"
    },
    {
    "State":"Delhi",
    "Capital":"New Delhi"
  }
  ]


const listItems=data.map((elements)=>{
  return(
    <ul type="disc">
      <li style={{fontWeight:'bold',color:"red"}}>
        {elements.State}
      </li>
      <li>
        {elements.Capital}
      </li>
    </ul>
  )
})
return(
  <div>{listItems}</div>
)
}
function App() {

  
//   const array=[
//     {
//          "firstname":"Gaurav",
//           "title":"SE"
//      },
//      {
//       "firstname":"Sonam",
//           "title":"Manager"
//      },
//      {
//       "firstname":"Sandy",
//           "title":"Data Engineer"
//      }
//  ]

  return (
    <div className="App">
       
      {/* {
      array.map(element=>(
        <li>{element.firstname} {element.title}</li>
        ))
        } */}
          <h1 style={{color:"green"}}>Array Rendering</h1>
          <br></br>
          <ArrayRendering />

    </div>
  );
  }


export default App;
