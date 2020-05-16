import {REG_ACTION,REG_RESET,LOGIN_ACTION,LOGIN_LOGOUT,FETCH_NEWS_ACTION,FETCH_NEWS_RESET,CUSTOM_NEWS_ACTION,CUSTOM_NEWS_RESET} from './ActionTypes';


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
        type:LOGIN_LOGOUT
    }
}

export const fetchNewsAction=(searchTerm)=>{
    return{
        type:FETCH_NEWS_ACTION,
        payload:searchTerm
    }
}
export const resetNewsAction=()=>{
    return{
        type:FETCH_NEWS_RESET
    }
}


export const fetchCustomNewsAction=(searchObject)=>{
    // console.log('checking search 6')
    return{
        type:CUSTOM_NEWS_ACTION,
        payload:searchObject
    }
}
export const resetCustomNewsAction=()=>{
    return{
        type:CUSTOM_NEWS_RESET
    }
}