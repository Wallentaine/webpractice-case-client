import React, {useState} from 'react';
import FileInput from "../components/UI/Inputs/FileInput/FileInput";
import Input from "../components/UI/Inputs/Input/Input";
import TextArea from "../components/UI/Inputs/TextArea/TextArea";
import Button from "../components/UI/Button/Button";
import {addNewPost} from "../http/posts/postAPI";

const CreateArticlePage = () => {


    const [img, setImg] = useState({})
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')



    return (
        <div  className='page'>

            <div className={"pageTitle"}>
                <h1>Создание статьи</h1>
            </div>

            <div className={'pageInputs'}>

                <FileInput
                    file={img}
                    setFile={setImg}
                    title={'Выберите изображение'}
                    accept={'.jpg, .jpeg, .png'}
                    style={{width: 400}}
                />

                <Input
                title={'Название статьи'}
                />
                <TextArea
                title={'Текст статьи'}
                style={{width: 700, height: 300}}
                />

                <Button>
                    Создать
                </Button>
            </div>

        </div>
    );
};

export default CreateArticlePage;