import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import {fetchOnePost} from "../http/posts/postAPI";
import Loading from "../components/UI/Loading/Loading";

const PostPage = () => {


    return (
        <div>
            <div>
            </div>
            <div className='head'>
                 {postDate}
            </div>
            <div className="title">
                {post.title}
            </div>
            <div className="img">

            </div>
            <div >
                {post.text}
            </div>
        </div>
    );
};

export default PostPage;