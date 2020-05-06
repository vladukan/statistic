import React from 'react'
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(5),
            width: '100%',
            height: 300,
        },
        textAlign: 'center',
        verticalAlign: 'middle'
    },
}));


export const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper >
                <h1>Информация</h1>
                <p>Версия приложения: <strong>1.0.0</strong></p>
            </Paper>
        </div>
    )
}
