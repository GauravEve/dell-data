import { FETCH_USERS_FAILURE } from "./userType";
import { FETCH_USERS_REQUEST } from "./userType";
import { FETCH_USERS_SUCCESS } from "./userType";
import axios from 'axios'
export const fetchUsersRequest=()=>{
    return{
    type:FETCH_USERS_REQUEST
    }
}

 const fetchUsersFailure=(error)=>{
    return{
    type:FETCH_USERS_FAILURE,
    payload:error
    }
}

const fetchUsersSuccess=(users)=>{
    return{
    type:FETCH_USERS_SUCCESS,
    payload:users
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{const users=response.data
        dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            const errorMsg=error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}



