import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';


const Navbar = () => {
    return (
        <div>
            <List component="nav">
                <ListItem component="div">
                    <ListItemText inset>
                        <Typography color="inherit" variant="title">
                           Home
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );
};

export default Navbar;