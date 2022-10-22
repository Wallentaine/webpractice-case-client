import React from 'react';
import classes from './NavItem.module.css'

const NavItem = ({children}) => {
    return (
        <div className={classes.navItem}>
            {children}
        </div>
    );
};

export default NavItem;