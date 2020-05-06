import React, {useContext} from 'react'
import Drawer from "@material-ui/core/Drawer"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {NavbarContext} from "../context/navbar/NavbarContext";
import {NavLink} from "react-router-dom";
import classes from './drawer.css'
import InfoIcon from '@material-ui/icons/Info';


export const DrawerBar = () => {
    const {close, drawer} = useContext(NavbarContext)

    return (
        <Drawer
            variant="temporary"
            anchor="left"
            open={drawer.open}
            onClose={close}
        >
            <List>
                <NavLink to={'/'} exact={true} activeClassName={classes.active} onClick={close}>
                    <ListItem button style={{marginRight: 20}}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary='Главная'/>
                    </ListItem>
                </NavLink>
                <NavLink to={'/about'} activeClassName={classes.active} onClick={close}>
                    <ListItem button style={{marginRight: 20}}>
                        <ListItemIcon><InfoIcon/></ListItemIcon>
                        <ListItemText primary='О сайте'/>
                    </ListItem>
                </NavLink>
            </List>

        </Drawer>
    )
}

