import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import {publicRoutes} from "../../routes";
import {MAIN_ROUTE} from "../../utils/consts";
import classes from './AppRouter.module.css'

const AppRouter = () => {
    return (
        <div className={classes.content}>
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                <Route path="*" element={<Navigate to={MAIN_ROUTE}/>}></Route>
            </Routes>
        </div>
    );
};

export default AppRouter;