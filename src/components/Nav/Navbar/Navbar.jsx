import React from 'react';
import classes from './Navbar.module.css'
import NavItem from "../NavItem/NavItem";

const Navbar = (props) => {
    return (
        <nav className={classes.navbar}>
            <NavItem>
                Главная
            </NavItem>
        </nav>
    );
};

export default Navbar;