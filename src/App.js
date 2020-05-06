import React from 'react'
import './App.css'
import {NavbarState} from "./context/navbar/NavbarState";
import {AuthState} from "./context/auth/AuthState";
import {RouterNavigation} from "./components/router-navigation";
import {BrowserRouter} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {StatisticState} from "./context/statistic/StatisticState";

function App() {
    return (
        <BrowserRouter>
            <AuthState>
                <NavbarState>
                    <StatisticState>
                        <CssBaseline/>
                        <RouterNavigation/>
                    </StatisticState>
                </NavbarState>
            </AuthState>
        </BrowserRouter>


    );
}

export default App;
