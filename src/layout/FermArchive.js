import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {StatisticContext} from "../context/statistic/StatisticContext";
import LinearProgress from "@material-ui/core/LinearProgress";

const columns = [
    {
        id: 'name',
        label: 'Дата',
        align: 'center',
    },
    {
        id: 'fan',
        label: 'FAN',
        align:'center'
    },
    {
        id: 'mhs',
        label: 'MHS',
        align: 'center',
    },
    {
        id: 'temp',
        label: 'Temp',
        align: 'center',
    },
];
const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop:20,
    },
    container: {
       height:window.innerWidth>380?window.innerHeight-100:window.innerHeight-120
    },
});

export const FermArchive= props=> {

    const classes = useStyles();

    const {statistic,get_table}=useContext(StatisticContext)
    useEffect( ()=>{
        get_table('2020-05-04',props.match.params.id)
    },[])

    return (
        <Paper className={classes.root}>
            { statistic.loading ? <LinearProgress />
                :
                <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                    >
                        {column.label}
                    </TableCell>
                ))}
                </TableRow>
                </TableHead>
                <TableBody>
                {statistic.table.map((row,index) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index.toString()}>
                                    <TableCell align='center' >{row.date}</TableCell>
                                    <TableCell align='center' style={{backgroundColor:row.fan>80?'coral':'lime'}}>{row.fan}</TableCell>
                                    <TableCell align='center' style={{backgroundColor:row.mhs<150?'coral':'lime'}}>{row.mhs}</TableCell>
                                    <TableCell align='center' style={{backgroundColor:row.fan>65?'coral':'lime'}}>{row.temp}</TableCell>
                        </TableRow>
                    );
                })}
                </TableBody>
                </Table>
                </TableContainer>
            }
        </Paper>
    );
}
