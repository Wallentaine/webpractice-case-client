import React, {useState} from 'react';
import Form from "../../UI/Form/Form";
import classes from './AuthForm.module.css'
import Input from "../../UI/Inputs/Input/Input";
import Button from "../../UI/Button/Button";
import {useNavigate} from 'react-router-dom'
import {REGISTRATION_ROUTE} from "../../../utils/consts";

const AuthForm = ({setModalActive}) => {

    const navigate = useNavigate()

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

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
                <Button>Войти</Button>
            </div>
        </Form>
    );
};

export default AuthForm;