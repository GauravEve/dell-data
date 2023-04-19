
import { PureComponent } from 'react'
import './App.css'
// class App extends PureComponent{
//   render(){
//     const{label,score=0,total=Math.max(1,score)}=this.props;
//   return(
//     <div>
//       <h6>{label}</h6>
//         <span>{Math.round(score/total*100)}</span>
//     </div>
//   )
// }
// }

// export default App

//Functional Component
export default function App({label,score=0,total=Math.max(1,score)}){
  return(
        <div>
          <h6>{label}</h6>
            <span>{Math.round(score/total*100)}</span>
        </div>
      )
}
