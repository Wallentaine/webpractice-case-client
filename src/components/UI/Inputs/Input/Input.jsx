import React from 'react';
import classes from './Input.module.css'

const Input = ({title, style, ...props}) => {
    return (
        <div className={classes.inputBlock} style={style}>
            <input className={classes.Input} {...props} />
            <div className={classes.title}>
                {title}
            </div>
        </div>
    );
};

export default Input;