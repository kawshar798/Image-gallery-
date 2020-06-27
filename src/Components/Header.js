import React from 'react';
import { makeStyle,fade, makeStyles } from "@material-ui/core/styles";
import { AppBar,Toolbar,Typography,IconButton, Button,Badge,InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Navbar from './Navbar';


const useStyles = makeStyles((theme)=>({
    search:{
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },  
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <div position="static">
            <AppBar color="primary" position="static">
                <Toolbar >
                  <Typography variant="title" color="inherit">
                    Logo
                  </Typography>
                  <Navbar/>
                </Toolbar>
           
            </AppBar>
        </div>
    );
};

export default Header;