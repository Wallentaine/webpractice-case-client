import React from 'react';
import img from '../assets/Foto_stati.png'
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../index";
import Button from "../components/UI/Button/Button";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import {fetchOnePost} from "../http/posts/postAPI";
import Loading from "../components/UI/Loading/Loading";

const ArticlePage = () => {


    const {id} = useParams()

    const [post, setPost] = useState({})

    const[fetchPost, isPostLoading, postErr] = useFetching( async() => {
        await fetchOnePost(id).then(data => {
            console.log(data)
            setPost(data)
        })
    })

    useEffect(() => {
        fetchPost()
    }, [])

    const postDate = new Date(post.createdAt).toLocaleDateString()

    if (isPostLoading)
        return (<Loading isLoading={isPostLoading}/>)


    return (
        <div className={"ArticlePage"}>
            <div className={"ArticleType"}>{post?.type?.title}</div>
            <div className={"ArticleTitle"}>{post?.title}</div>
            <div className={"ArticleInfo"}>
                <div className={"ArticleDate"}>{postDate}</div>
            </div>
            <img src={process.env.REACT_APP_API_URL + post.img}/>
            <div className={"ArticleText"}>
                {post?.text}
            </div>
            <div className='editingButton'>
                <Button> Редактировать </Button>
            </div>

        </div>
    );
}
export default ArticlePage