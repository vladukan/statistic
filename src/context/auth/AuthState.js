import React, {useReducer} from 'react'
import {AuthContext} from './AuthContext'
import {AuthReducer} from './AuthReducer'
import {ERROR_AUTH, LOAD_END, LOAD_START, LOGIN, LOGOUT, VALID_LOGIN, VALID_PASS} from '../types'
import axios from "axios";
import {BACKEND_SERVER} from "../../backend/server";


export const AuthState = ({children}) => {

    const initialState = {
        isAuth: false,
        name: '',
        pass: '',
        invalidLogin: true,
        invalidPass: true,
        touchLogin: false,
        touchPass: false,
        loading:false,
        error:null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const autoLogon = () => {
        if (localStorage.getItem('userName')&&localStorage.getItem('userPass')) {
            login(localStorage.getItem('userName'),localStorage.getItem('userPass'))
            console.log('autologon')
        } else {
           logout()
        }
    }

    const load_start=()=>{
        dispatch({type: LOAD_START})
    }
    const load_end=()=>{
        dispatch({type: LOAD_END})
    }
    const error_auth=error=>{
        dispatch({type: ERROR_AUTH,error})
    }

    const login = async (name = null, pass=null) => {
        load_start()
        error_auth(null)
        try{
            let data={
                login: name,
                password: pass
            }
            const response = await axios.post(BACKEND_SERVER+'php/login.php',data)
            console.log(response.data)
            load_end()
            if(response.data===1){
                localStorage.setItem('userName', name)
                localStorage.setItem('userPass', pass)
                dispatch({type: LOGIN, name,pass})
            }else{
                error_auth('Не верный логин или пароль!')
            }
        }catch (e) {
            console.log(e)
            load_end()
            error_auth('Ошибка загрузки с сервера')
        }
    }

    const logout = () => {
        localStorage.removeItem('userName')
        localStorage.removeItem('usePass')
        dispatch({type: LOGOUT})
    }

    const validLogin = login => {
        let invalid = true;
        //console.log(login)
        if (login.length >=5 ) {
            invalid = false
        }else{
            invalid=true
        }
        dispatch({type: VALID_LOGIN, invalid, touch: true})
    }

    const validPass = pass => {
        let invalid = true;
        if (pass.length > 5) {
            invalid = false
        }else{
            invalid=true
        }
        dispatch({type: VALID_PASS, invalid, touch: true})
    }

    return (
        <AuthContext.Provider value={{
            login, logout, autoLogon, validLogin, validPass,error_auth, auth: state
        }}>
            {children}
        </AuthContext.Provider>
    )
}
