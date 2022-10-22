import React from 'react';
import classes from './UserList.module.css'
import UserItem from "../UserItem/UserItem";
const UserList = ({users}) => {


    return (
        <div className={classes.userList}>
            {users.map(user =>
            <UserItem key={user.id} user={user}/>
            )}
        </div>
    );
};

export default UserList;