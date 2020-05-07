import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import {StatisticContext} from "../context/statistic/StatisticContext";
import LinearProgress from "@material-ui/core/LinearProgress";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";

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
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const {statistic,get_table}=useContext(StatisticContext)
    useEffect( ()=>{
        let date=selectedDate.getFullYear()+'-'+(selectedDate.getMonth()+1)+'-'+selectedDate.getDate()
        get_table(date,props.match.params.id)
    },[])


    const handleDateChange = (date) => {
        setSelectedDate(date);
        date=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
        get_table(date,props.match.params.id)
    };

    return (
        <Paper className={classes.root}>
            { statistic.loading ? <LinearProgress />
                :
                <React.Fragment >
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                        <div style={{textAlign:'center'}}>
                            <DatePicker
                                autoOk
                                label="Дата"
                                format="yyyy-MM-dd"
                                clearable
                                invalidDateMessage={'Введите корректную дату'}
                                disableFuture
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </div>
                    </MuiPickersUtilsProvider>
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
                </React.Fragment>
            }
        </Paper>
    );
}
