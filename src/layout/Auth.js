import React, {useContext, useEffect, useState} from 'react'
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {AuthContext} from "../context/auth/AuthContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from '@material-ui/lab/Alert';
import LinearProgress from "@material-ui/core/LinearProgress";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: 10,
            width: '100%'
        },
        textAlign: 'center',
        verticalAlign: 'middle',
        marginTop: '15%'
    },
    box_input: {
        margin: 5
    },
    input: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(2),
        width: '70%',
    },
    button: {
        marginBottom: 20
    }
}));


export const Auth = () => {
    const classes = useStyles();
    const {auth, validLogin, validPass, login, error_auth} = useContext(AuthContext)
    const [inputLogin, setLogin] = useState('')
    const [inputPass, setPass] = useState('')
    const [checked, setChecked] = useState(false)

    useEffect(()=>{
        setChecked(true)
    },[])

    const SendForm = () => {
        //console.log(inputLogin,inputPass)
        login(inputLogin, inputPass)
    }
    return (
        <Zoom in={checked}>
            <div className={classes.root}>
                <Paper>
                    <h1>Авторизация</h1>
                    <div className={classes.box_input}>
                        <TextField
                            error={auth.invalidLogin && auth.touchLogin}
                            className={classes.input}
                            label="Логин"
                            value={inputLogin}
                            placeholder="Введите логин"
                            helperText={auth.invalidLogin && auth.touchLogin ? 'Логин не должен быть меньше 6 символов' : null}
                            variant="outlined"
                            onChange={(e) => {
                                e.preventDefault()
                                validLogin(e.target.value)
                                setLogin(e.target.value)
                            }}
                        />
                    </div>

                    <div className={classes.box_input}>
                        <TextField
                            error={auth.invalidPass && auth.touchPass}
                            className={classes.input}
                            label="Пароль"
                            placeholder="Введите пароль"
                            type="password"
                            value={inputPass}
                            helperText={auth.invalidPass && auth.touchPass ? 'Пароль не должен быть меньше 6 символов' : null}
                            variant="outlined"
                            onChange={(e) => {
                                e.preventDefault()
                                validPass(e.target.value)
                                setPass(e.target.value)
                            }}
                        />
                    </div>
                    <div className={classes.button}>
                        <Button variant="contained" disabled={auth.invalidLogin || auth.invalidPass}
                                onClick={SendForm}>Войти</Button>
                    </div>

                    {auth.loading ? <LinearProgress/> : null}

                    {auth.error == null ? null :
                        <Alert style={{margin: 15}} severity="error"
                               onClose={() => error_auth(null)}>{auth.error}</Alert>
                    }
                </Paper>
            </div>
        </Zoom>
    )
}
