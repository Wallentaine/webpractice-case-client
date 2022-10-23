import React, {useContext, useState} from 'react';
import Form from "../../UI/Form/Form";
import classes from './AuthForm.module.css'
import Input from "../../UI/Inputs/Input/Input";
import Button from "../../UI/Button/Button";
import {useNavigate} from 'react-router-dom'
import {REGISTRATION_ROUTE} from "../../../utils/consts";
import {useFetching} from "../../../hooks/useFetching";
import {login} from "../../../http/posts/userAPI";
import {Context} from "../../../index";

const AuthForm = ({setModalActive}) => {

    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [auth, isAuthLoading, authError] = useFetching(async () => {
       login(email, password).then((data) => {
           console.log(data)
           user.setUser(data)
           user.setIsAuth(true)
           setModalActive(false)
       })

    })

    return (
        <Form>
            <h2>Авторизация</h2>
            <div className={classes.formInputs}>
                <Input
                    title={'E-mail'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={'Введите E-mail'}
                />
                <Input
                    title={'Пароль'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={'Введите пароль'}
                />
                <div className={classes.haveAccount}>
                    Нет аккаунта? <span onClick={() => {
                        setModalActive(false)
                        navigate(REGISTRATION_ROUTE)
                }}
                >
                    Зарегистрируйтесь</span>
                </div>
                <Button onClick={() => auth()}>Войти</Button>
            </div>
        </Form>
    );
};

export default AuthForm;