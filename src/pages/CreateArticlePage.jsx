import React, {useContext, useEffect, useState} from 'react';
import FileInput from "../components/UI/Inputs/FileInput/FileInput";
import Input from "../components/UI/Inputs/Input/Input";
import TextArea from "../components/UI/Inputs/TextArea/TextArea";
import Button from "../components/UI/Button/Button";
import {addNewPost} from "../http/posts/postAPI";
import {useFetching} from "../hooks/useFetching";
import {fetchAllTypes} from "../http/posts/typeAPI";
import Select from "../components/UI/Select/Select";
import svgUp from "../assets/icon-arrow-up.svg";
import svgDown from "../assets/icon-arrow-down.svg";
import DropdownMenu from "../components/UI/DropdownMenu/DropdownMenu";
import DropdownItem from "../components/UI/DropdownMenu/DropdownItem";
import {useDropdown} from "../hooks/useDropdown";
import {Context} from "../index";
import Loading from "../components/UI/Loading/Loading";

const CreateArticlePage = () => {


    const {user} = useContext(Context)
    const [openTypes, setOpenTypes, closeTypesRef] = useDropdown()
    const [img, setImg] = useState({})
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [type, setType] = useState({id: 0, title: 'Выберите тип'})
    const [types, setTypes] = useState([])
    const [addNewArticle, isArticleLoading, articleErr] = useFetching(async () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('text', text)
        formData.append('userId', user.user.id)
        formData.append('typeId', type.id)
        formData.append('img', img)
        await addNewPost(formData).then(data => {
            console.log(data)})
    })


    const [fetchTypes, isTypeLoading, typeError] = useFetching(async() =>{
         await fetchAllTypes().then((data) => {
             setTypes(data)
         })
    })

    useEffect(() => {
        fetchTypes()
    }, [])



    return (
        <div  className='page'>
            <Loading isLoading={isArticleLoading}/>
            <Loading isLoading={isTypeLoading}/>
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
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                title={'Название статьи'}
                />
                <TextArea
                    text={text}
                    setText={setText}
                title={'Текст статьи'}
                style={{width: 700, height: 300}}
                />


                <div ref={closeTypesRef}>

                    <div className='dropdownTitle'
                         onClick={() => setOpenTypes(!openTypes)}
                    >
                        {type.title} {openTypes ? <img src={svgUp}/> : <img src={svgDown}/>}
                    </div>

                    <DropdownMenu
                        open={openTypes}
                        setOpen={setOpenTypes}
                        ref={closeTypesRef}
                    >
                        {types.map((type) =>
                            <DropdownItem
                                key={type.id}
                                onClick={() => {
                                    setType(type)
                                    setOpenTypes(false)
                                }}
                            >
                                {type.title}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </div>
                <Button style={{marginTop: 20}} onClick={() => addNewArticle()}>
                    Создать
                </Button>
            </div>


        </div>
    );
};

export default CreateArticlePage;