import React, {useContext} from 'react';
import {Context} from "../index";
import {useParams} from "react-router-dom";

const PostPage = () => {

    const {post} = useContext(Context)

    const {id} = useParams()

    const chosenPost = post.posts.find((post) => post.id === parseInt(id))


    return (
        <div>
            <div>
                {chosenPost.type}
            </div>
            <div className='head'>
                {chosenPost.userName} {chosenPost.createdAt}
            </div>
            <div className="title">
                {chosenPost.title}
            </div>
            <div className="img">
                {chosenPost.img}
            </div>
            <div dangerouslySetInnerHTML={{__html: chosenPost.text}}>

            </div>
        </div>
    );
};

export default PostPage;