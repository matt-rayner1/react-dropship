import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/dropship.png';
import useStyles from './styles'
import { Link , useLocation} from 'react-router-dom'
import Dropdown from './Dropdown/Dropdown'

const Navbar = ({ totalItems, setCategory }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Dropship.js" height="40px" className={classes.image} />
                        Dropship.js&nbsp;&nbsp;   
                        {location.pathname=== '/' && (
                            <>
                                <Dropdown setCategory={setCategory} />
                            </>
                        )}
                    </Typography>
                    {location.pathname === '/' && (
                        <>
                            <div className={classes.button}>
                                <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </div>
                        </>
                    )}
                </Toolbar> 
            </AppBar>   
        </>
    )
}

export default Navbar
