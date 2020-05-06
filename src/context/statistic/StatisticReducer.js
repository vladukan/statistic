import {LOAD_STATISTIC_START, LOAD_STATISTIC_END, ERROR_STATISTIC, GET_STATISTIC, GET_TABLE} from "../types";

const handlers = {
    [LOAD_STATISTIC_START]: state => ({...state,loading:true}),
    [LOAD_STATISTIC_END]: state => ({...state,loading:false}),
    [ERROR_STATISTIC]: (state,action) => ({...state,error:action.error}),
    [GET_STATISTIC]: (state,action) => ({...state,data:action.payload}),
    [GET_TABLE]: (state,action) => ({...state,table:action.table}),
    DEFAULT: state => state
}

export const StatisticReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
