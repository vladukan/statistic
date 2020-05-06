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


export const RouterNavigation = () => {
    const {auth,autoLogon} = useContext(AuthContext)

    let routes = (
            <Switch>
                <Route path="/login" exact component={Auth}/>
                <Redirect to="/login"/>
            </Switch>
        )

    useEffect(()=>{
        autoLogon()
    },[])

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


    return (
        <React.Fragment>
            {auth.isAuth?<Navbar/>:null}
            {auth.isAuth?<DrawerBar/>:null}
            <Container maxWidth="md">
            {routes}
            </Container>
        </React.Fragment>
    )
}

