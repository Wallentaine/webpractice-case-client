import React, {useContext, useState} from 'react';
import classes from './Navbar.module.css'
import Modal from "../../UI/Modal/Modal";
import AuthForm from "../../Forms/AuthForm/AuthForm";
import Button from "../../UI/Button/Button";
import {NavLink} from "react-router-dom";
import {APPEAL_RECTOR_ROUTE, MAIN_ROUTE, SCHEDULE_ROUTE, USER_ROUTE} from "../../../utils/consts";
import NavItem from "../NavItem/NavItem";
import AppealForm from "../../Forms/AppealForm/AppealForm";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";


const Navbar = observer((props) => {

    const logOut = () => {
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    const {user} = useContext(Context)

    const [authActive, setAuthActive] = useState(false)
    const [appealActive, setAppealActive] = useState(false)

    return (
        <nav className={classes.navbar}>

            <div className={classes.logo}>
                Logo
            </div>

            <div className={classes.navPanel}>

                <NavItem>
                    <NavLink to={MAIN_ROUTE}>Новости</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={SCHEDULE_ROUTE}>Расписание</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={USER_ROUTE}>Профиль</NavLink>
                </NavItem>
                <NavItem>
                    <span className="rectorApeal" onClick={() => setAppealActive(true)}>Обращение к ректору</span>
                </NavItem>
                {
                    user.isAuth ?
                        <NavItem>
                        <Button onClick={() => logOut()}>Выйти</Button>
                    </NavItem> :
                        <NavItem>
                            <Button onClick={() => setAuthActive(true)}>Авторизация</Button>
                        </NavItem>

                }


            </div>


            <Modal
                active={authActive}
                setActive={setAuthActive}
            >
                <AuthForm setModalActive={setAuthActive}/>
            </Modal>
            <Modal
                active={appealActive}
                setActive={setAppealActive}
            >
                <AppealForm setModalActive={setAuthActive}/>
            </Modal>
        </nav>
    );
});

export default Navbar;