import React, {useState} from 'react';
import Form from "../../UI/Form/Form";
import Input from "../../UI/Inputs/Input/Input";
import Button from "../../UI/Button/Button";
import TextArea from "../../UI/Inputs/TextArea/TextArea";
import classes from './AppealForm.module.css'

const AppealForm = () => {

    const [theme, setTheme] = useState('')

    const [message, setMessage] = useState('')

    return (
        <Form style={{width: 700}}>
            <h1>Обращение к ректору</h1>
            <div className={classes.formInputs}>
                <Input
                    title={'Тема обращения'}
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                />
                <TextArea
                    title={'Текст обращения'}
                    text={message}
                    setText={setMessage}
                />
            </div>
            <Button>Отправить</Button>
        </Form>
    );
};

export default AppealForm;