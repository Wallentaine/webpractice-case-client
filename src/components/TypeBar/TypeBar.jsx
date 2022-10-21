import React, {useContext} from 'react';
import {Context} from "../../index";
import classes from './TypeBar.module.css'

const TypeBar = () => {

    const {post} = useContext(Context)

    return (
        <div className={classes.typeBar}>
            {post.types.map((type) =>
            <div key={type.id} className={classes.typeItem}>
                {type.name}
            </div>
            )}
        </div>
    );
};

export default TypeBar;