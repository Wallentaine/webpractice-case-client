import React from 'react';
import classes from './UserItem.module.css'
import img from '../../../assets/Foto_stati.png'

const UserItem = ({user}) => {
    return (
        <div className={classes.userItem}>
            <div className={classes.userImg}>
                <img src={img}/>
            </div>
            <div className={classes.userInfo}>
                <div className={classes.infoItem}>
                    {user.name}
                </div>
                <div className={classes.infoItem}>
                    {user.email}
                </div>
                <div className={classes.infoItem}>
                    {user.role}
                </div>
            </div>
        </div>
    );
};

export default UserItem;