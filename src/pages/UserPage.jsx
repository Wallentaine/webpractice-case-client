import React, {useContext} from 'react';
import UserInfo from "../components/User/UserInfo/UserInfo";
import AdminTools from "../components/User/AdminTools/AdminTools";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const UserPage = observer(() => {

    const {user} = useContext(Context)
    return (
        <div className="userPage">
            <UserInfo/>
            {user.user.role === 'ADMIN' &&
                <AdminTools/>
            }

        </div>
    );
});

export default UserPage;