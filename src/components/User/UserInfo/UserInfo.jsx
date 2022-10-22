import React from 'react';
import classes from './UserInfo.module.css'
import image from '../../../assets/Foto_stati.png'

const UserInfo = () => {



    return (
        <div className={classes.userInfo}>

            <div className={classes.avatar}>
                <img src={image}/>
            </div>

            <div className={classes.userData}>
                <div>

                    <div className={classes.nameItem}>
                        Белоусова
                    </div>
                    <div className={classes.nameItem}>
                        Юлия
                    </div>
                    <div className={classes.nameItem}>
                        Андреевна
                    </div>

                </div>
                <div >
                    <div className={classes.role}>
                        Администратор
                    </div>
                    <div className={classes.mail}>
                        wqe@mail.ru
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserInfo;