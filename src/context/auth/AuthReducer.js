import {ERROR_AUTH, LOAD_END, LOAD_START, LOGIN, LOGOUT, VALID_LOGIN, VALID_PASS} from "../types";

const handlers = {
    [LOGIN]: (state,action) => ({...state,isAuth:true,name: action.name,pass: action.pass}),
    [LOGOUT]: state => ({...state,isAuth:false, name:'',pass:''}),
    [VALID_LOGIN]: (state,action) => ({...state,invalidLogin:action.invalid,touchLogin: action.touch}),
    [VALID_PASS]: (state,action) => ({...state,invalidPass:action.invalid,touchPass: action.touch}),
    [LOAD_START]: state => ({...state,loading:true}),
    [LOAD_END]: state => ({...state,loading:false}),
    [ERROR_AUTH]: (state,action) => ({...state,error:action.error}),
    DEFAULT: state => state
}

export const AuthReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
