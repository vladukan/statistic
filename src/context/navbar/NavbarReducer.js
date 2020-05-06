import {DRAWER_OPEN, DRAWER_CLOSE} from "../types";

const handlers = {
    [DRAWER_OPEN]: state => ({...state,open:true}),
    [DRAWER_CLOSE]: state => ({...state,open:false}),
    DEFAULT: state => state
}

export const NavbarReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
