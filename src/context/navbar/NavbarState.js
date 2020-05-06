import React, {useReducer} from 'react'
import {NavbarContext} from './NavbarContext'
import {NavbarReducer} from './NavbarReducer'
import {DRAWER_OPEN, DRAWER_CLOSE} from '../types'


export const NavbarState = ({children}) => {

    const initialState = {
        open: false
    }

    const [state, dispatch] = useReducer(NavbarReducer, initialState)

    const close = () => dispatch({type: DRAWER_CLOSE})

    const open = () => dispatch({type: DRAWER_OPEN})


        return (
            <NavbarContext.Provider value={{
                open, close, drawer: state
            }}>
                {children}
            </NavbarContext.Provider>
        )
}
