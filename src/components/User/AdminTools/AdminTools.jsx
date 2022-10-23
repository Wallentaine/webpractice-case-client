import React, {useState} from 'react';
import classes from './AdminTools.module.css'
import Input from "../../UI/Inputs/Input/Input";
import Button from "../../UI/Button/Button";
import {CREATE_ARTICLE_ROUTE, USER_LIST_ROUTE} from "../../../utils/consts";
import {useScrollUp} from "../../../hooks/useScrollUp";
import FileInput from "../../UI/Inputs/FileInput/FileInput";
import {addNewType} from "../../../http/posts/typeAPI";
import {useFetching} from "../../../hooks/useFetching";
import Loading from "../../UI/Loading/Loading";

const AdminTools = () => {

    const navigate = useScrollUp()

    const [category, setCategory] = useState('')
    const [group, setGroup] = useState('')
    const [schedule, setSchedule] = useState('')

    const [addType, isTypeLoading, typeError] = useFetching(async () => {
        await addNewType(category).then((data) => {
            console.log(data)})
    })

    return (
        <div className={classes.adminTools}>
            <Loading isLoading={isTypeLoading}/>
            <div>

                <div className={classes.link}>
                    <span onClick={() => navigate(CREATE_ARTICLE_ROUTE)}>
                        Добавить статью
                    </span>
                </div>
                <div className={classes.link}>
                    <span onClick={() => navigate(USER_LIST_ROUTE)}>
                          Список пользователей
                    </span>

                </div>


                <div className={classes.adminInput}>
                    <span>Добавить категорию</span>
                    <Input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{width: 400}}
                        title={'Название категории'}
                    />
                    <Button
                        style={{width: 200 ,marginLeft:20}}
                        onClick={() => addType()}
                    >
                        Добавить
                    </Button>
                </div>
                <div className={classes.adminInput}>
                    <span>Добавить группу</span>
                    <Input
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        style={{width: 400}}
                        title={'Название группы'}
                    />
                    <Button style={{width: 200 ,marginLeft:20}}>Добавить</Button>
                </div>
                <div className={classes.adminInput}>
                    <span>Добавить расписание</span>
                    <FileInput
                        file={schedule}
                        setFile={setSchedule}
                        title={'Excel файл'}
                        accept={'.xlsx'}
                        style={{width: 400}}
                    />
                    <Button style={{width: 200 ,marginLeft:20}}>Добавить</Button>
                </div>
            </div>
        </div>
    );
};

export default AdminTools;