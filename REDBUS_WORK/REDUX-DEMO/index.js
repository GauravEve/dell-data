const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM';
const redux=require('redux')
const createStore=redux.createStore
const combinedReducers=redux.combineReducers;
const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger()
const applyMiddleware=redux.applyMiddleware;

function buyCake(){//action creater
    return {
        type:BUY_CAKE,
        info:"First redux action"
    }    
}
function buyIceCream(){//action creater
    return {
        type:BUY_ICECREAM,
        info:"First redux action"
    }    
}

//(previousState,action)=>newState

const initialCakeState={
    numOfCakes:10
}

const initialIceCreamState={
    numOfIceCreams:20
}

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,   //copy of state operator return all other properties of object unaltered
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}

const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,   //copy of state operator return all other properties of object unaltered
            numOfIceCreams:state.numOfIceCreams-1
        }
        default:return state
    }
}

const rootReducer=combinedReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store=createStore(rootReducer,applyMiddleware(logger))
console.log('initial State',store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
