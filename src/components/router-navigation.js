import React, {useContext, useEffect} from 'react'
import {Home} from "../layout/Home";
import {About} from "../layout/About";
import {AuthContext} from "../context/auth/AuthContext";
import {Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./navbar";
import {DrawerBar} from "./drawer";
import {Auth} from "../layout/Auth";
import Container from "@material-ui/core/Container";
import {FermArchive} from "../layout/FermArchive";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    content: {
        position: 'fixed',
        bottom: 75,
        top: 75,
        left: 0,
        right: 0,
        overflowY: 'scroll'
    },
    bottom: {
        width: '100%',
        position: 'fixed',
        bottom:0
    },
});

export const RouterNavigation = () => {
    const {auth, autoLogon} = useContext(AuthContext)

    let routes = (
        <Switch>
            <Route path="/login" exact component={Auth}/>
            <Redirect to="/login"/>
        </Switch>
    )

    useEffect(() => {
        autoLogon()
    }, [])

    if (auth.isAuth) {
        routes = (
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/ferm/:id" component={FermArchive}/>
                <Route path="/" exact component={Home}/>
                <Redirect to="/"/>
            </Switch>
        )
    }

    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <React.Fragment>
            {auth.isAuth ? <Navbar/> : null}
            {auth.isAuth ? <DrawerBar/> : null}
            <Container className={classes.content}>
                {routes}
            </Container>
            {auth.isAuth ?
                <BottomNavigation value={value} onChange={handleChange} className={classes.bottom}>
                    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
                    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>}/>
                </BottomNavigation>
                : null}
        </React.Fragment>
    )
}

