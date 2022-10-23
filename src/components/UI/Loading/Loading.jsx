import React from 'react';
import classes from './Loading.module.css'
import img from '../../../assets/1a934a23-df16-4c55-bf6e-d1790406b2ff.jfif'

const Loading = ({isLoading}) => {
    return (
        <div className={isLoading ? `${classes.loading} ${classes.active}` : classes.loading}>

        </div>
    );
};

export default Loading;