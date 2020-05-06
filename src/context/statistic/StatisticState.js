import React, {useReducer} from 'react'
import {StatisticContext} from './StatisticContext'
import {StatisticReducer} from './StatisticReducer'
import {GET_STATISTIC, LOAD_STATISTIC_START, LOAD_STATISTIC_END, ERROR_STATISTIC, GET_TABLE} from '../types'
import axios from "axios";
import {BACKEND_SERVER} from "../../backend/server";

export const StatisticState = ({children}) => {

    const initialState = {
        loading: false,
        error: null,
        data:[],
        table:[]
    }

    const [state, dispatch] = useReducer(StatisticReducer, initialState)

    const get_statistic = async () => {
        load_start()
        error_statistic(null)
        try{
            const response = await axios.get(BACKEND_SERVER+'php/get_statistic.php')
            console.log(response.data)
            load_end()
            if(response.data.length>0){
                dispatch({type: GET_STATISTIC,payload:response.data})
            }else{
                error_statistic('Нет данных с сервера')
            }
        }catch (e) {
            console.log(e)
            load_end()
            error_statistic('Ошибка загрузки с сервера')
        }
    }
    const get_table = async (date,id) => {
        load_start()
        error_statistic(null)
        let data={
            date,
            id
        }
        try{
            const response = await axios.post(BACKEND_SERVER+'php/get_table.php',data)
            if(response.data.status){
                //console.log(response.data)
                dispatch({type: GET_TABLE,table:response.data.table})
            }else{
                error_statistic('Нет данных с сервера')
            }
            load_end()
        }catch (e) {
            console.log(e)
            load_end()
            error_statistic('Ошибка загрузки с сервера')
        }
    }

    const load_start=()=>{
        dispatch({type: LOAD_STATISTIC_START})
    }
    const load_end=()=>{
        dispatch({type: LOAD_STATISTIC_END})
    }
    const error_statistic=error=>{
        dispatch({type: ERROR_STATISTIC,error})
    }
        return (
            <StatisticContext.Provider value={{
                get_statistic,error_statistic,get_table, statistic: state
            }}>
                {children}
            </StatisticContext.Provider>
        )
}
