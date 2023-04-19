import React from 'react';
import  {buyIceCream}  from '../redux/index';
import {connect} from 'react-redux'
function iceCreamContainer(props){
    return(
        <div>
            <h2>
                Number of ice creams-{props.numOfIceCream}
            </h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        numOfIceCream:state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(iceCreamContainer);