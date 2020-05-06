import React, {useContext, useEffect} from 'react'
import {StatisticContext} from "../context/statistic/StatisticContext";
import {FermCard} from "../components/fermCard";


export const Home = () => {
    const {statistic,get_statistic}=useContext(StatisticContext)
    useEffect(()=>{
        get_statistic()
        const data= setInterval(get_statistic,60000)
        return ()=>{
            clearInterval(data)
        }
    },[])



    const ListStatistic=()=> {
        return statistic.data.map( (ferm,index) => {
            return (
                    <FermCard  key={index.toString()}
                               data={ferm}
                    />
            )
        })
    }

  return (
    <React.Fragment>
        {ListStatistic()}
    </React.Fragment>
  )
}
