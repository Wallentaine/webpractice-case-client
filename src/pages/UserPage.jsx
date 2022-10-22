import React from 'react';
import UserInfo from "../components/User/UserInfo/UserInfo";
import AdminTools from "../components/User/AdminTools/AdminTools";

const UserPage = () => {
    return (
        <div className="userPage">
            <UserInfo/>
            <AdminTools/>
        </div>
    );
};

export default UserPage;