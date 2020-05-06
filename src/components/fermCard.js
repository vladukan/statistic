import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    paper: {
        padding: 5
    },

});

export const FermCard = props => {
    const classes = useStyles();

    const fan=()=>{
        return props.data.cards_fan.map( (item,index) => {
            return (
                <Grid item xs={2} style={{textAlign:'center'}} key={index.toString()}>
                    <Paper className={classes.paper} style={{fontSize:12,backgroundColor:item>80?'coral':'lime'}}>
                        {item+'%'}
                    </Paper>
                </Grid>
            )
        })
    }
    const mhs=()=>{
        return props.data.cards_mhs.map( (item,index) => {
            return (
                <Grid item xs={2} style={{textAlign:'center'}} key={index.toString()}>
                    <Paper className={classes.paper} style={{fontSize:12,backgroundColor:item<24?'coral':'lime'}}>
                        {item+''}
                    </Paper>
                </Grid>
            )
        })
    }
    const temp=()=>{
        return props.data.cards_temp.map( (item,index) => {
            return (
                <Grid item xs={2} style={{textAlign:'center'}} key={index.toString()}>
                    <Paper className={classes.paper} style={{fontSize:12,backgroundColor:item>69?'coral':'lime'}}>
                        {item} <sup>o</sup>C
                    </Paper>
                </Grid>
            )
        })
    }
    return (
        <React.Fragment>
            <Paper style={{marginTop:10,padding:10}}>
                <Grid container spacing={1}>
                    <Grid item xs={4} style={{textAlign:'center'}}>
                        <Paper className={classes.paper}>{props.data.date}</Paper>
                    </Grid>
                    <Grid item xs={4} style={{textAlign:'center'}}>
                        <Paper className={classes.paper}>{props.data.time + ' m'}</Paper>
                    </Grid>
                    <Grid item xs={4} style={{textAlign:'center'}}>
                        <Paper className={classes.paper} style={{backgroundColor:props.data.mhs>150?'lime':'coral'}}>{props.data.mhs + ' Mh/s'}</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={4} style={{textAlign:'center'}}>
                        <Paper className={classes.paper}>{props.data.client}</Paper>
                    </Grid>
                    <Grid item xs={4} style={{textAlign:'center'}}>
                        <Paper className={classes.paper} style={{backgroundColor:'lime'}}>{props.data.shares}</Paper>
                    </Grid>
                    <Grid item xs={4} style={{textAlign:'center'}}>
                        <Paper className={classes.paper} style={{backgroundColor: 'coral'}}>{props.data.errors_shares}</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    {fan()}
                </Grid>
                <Grid container spacing={1}>
                    {mhs()}
                </Grid>
                <Grid container spacing={1}>
                    {temp()}
                </Grid>
                <Grid container spacing={3} style={{marginTop:0}}>
                    <Grid item xs={6} style={{textAlign:'center'}}>
                        <Button style={{width:'100%'}} variant="contained" color="primary">Перезагрузка</Button>
                    </Grid>
                    <Grid item xs={6} style={{textAlign:'center'}}>
                        <NavLink to={'/ferm/'+props.data.id_ferm}>
                            <Button style={{width:'100%'}} variant="contained">Архив</Button>
                        </NavLink>
                    </Grid>

                </Grid>
            </Paper>
        </React.Fragment>


    );
}
