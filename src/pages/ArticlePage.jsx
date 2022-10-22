import React from 'react';
import img from '../assets/Foto_stati.png'
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../index";
import Button from "../components/UI/Button/Button";

const ArticlePage = () => {

    const {post} = useContext(Context)

    const {id} = useParams()

    const chosenPost = post.posts.find((post) => post.id === parseInt(id))

    return (
        <div className={"ArticlePage"}>
            <div className={"ArticleType"}>{chosenPost.type}</div>
            <div className={"ArticleTitle"}>{chosenPost.title}</div>
            <div className={"ArticleInfo"}>
                <div className={"ArticleAuthor"}>Автор: {chosenPost.userName}</div>
                <div className={"ArticleDate"}>{chosenPost.createdAt}</div>
            </div>
            <img src={img}/>
            <div className={"ArticleText"}>
                {chosenPost.text}
            </div>
            <div className='editingButton'>
                <Button> Редактировать </Button>
            </div>

        </div>
    );
}
export default ArticlePage