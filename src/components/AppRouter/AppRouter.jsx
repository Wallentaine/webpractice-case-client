import React, {useContext} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import {adminRoutes, authRoutes, publicRoutes, workerRoutes} from "../../routes";
import {MAIN_ROUTE} from "../../utils/consts";
import classes from './AppRouter.module.css'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {

    const {user} = useContext(Context)

    return (
        <div className={classes.content}>
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                {user.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                {user.user.role === 'ADMIN' && adminRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                {
                    user.user.role === "WORKER" && workerRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                }
                <Route path="*" element={<Navigate to={MAIN_ROUTE}/>}></Route>
            </Routes>
        </div>
    );
});

export default AppRouter;