import {REG_ACTION,REG_RESET,LOGIN_ACTION,LOGIN_RESET} from './ActionTypes';


export const regAction=(credentials)=>{
    return{
        type:REG_ACTION,
        payload:credentials
    }
}
export const resetRegAction=()=>{
    return{
        type:REG_RESET
    }
}

export const loginAction=(credentials)=>{
    return{
        type:LOGIN_ACTION,
        payload:credentials
    }
}
export const resetLoginAction=()=>{
    return{
        type:LOGIN_RESET
    }
}




