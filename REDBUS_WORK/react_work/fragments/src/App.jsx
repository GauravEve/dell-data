import { Fragment } from 'react'
import './App.css'

function App() {
  const countries=[
    {
      id:'1',
      name:'India',
      currency:"INR"
    },
    {
      id:'2',
      name:'USA',
      currency:"USD"
    },
    {
      id:'3',
      name:'Japan',
      currency:"Yen"
    }
  ]
  return (
    // <div className="App">

        
    // </div>
    <Fragment>
      {
        countries.map(item=>(
          <Fragment key={item.id}>
              <h2>Name of the country is:{item.name}</h2>
              <h3>Currency of the country is:{item.currency}</h3>
          </Fragment>
        ))
      }
    </Fragment>
  )
}

export default App
