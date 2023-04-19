import {useRef} from "react";
import './App.css'
export default function UnControlledComponent(){
    const inputValueReff=useRef('');
    const buttonClicked=()=>{
        alert(inputValueReff.current.value);
    };

    return(
        <div className="App">
            <input type="text" ref={inputValueReff}></input>
            <button onClick={buttonClicked}>Submit</button>
        </div>
    );
}