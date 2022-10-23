import React from 'react';
import classes from './Select.module.css'
const Select = ({options, defaultValue, value, setValue, ...props}) => {
    return (
        <select
            className={classes.select}
            value={value}
            onChange={e => setValue(e.target.value)}
            {...props}
        >
            <option disabled value={defaultValue}>{defaultValue}</option>
            {options.map(option =>
                <option key={option.id} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default Select;