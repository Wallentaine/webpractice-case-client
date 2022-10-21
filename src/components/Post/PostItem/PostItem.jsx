import React from 'react';
import classes from './PostItem.module.css'
import {Link} from "react-router-dom";
import {POST_ROUTE} from "../../../utils/consts";

const PostItem = ({post}) => {


    return (
        <div className={classes.postItem}>
            <div className='head'>
                {post.userName} {post.createdAt}
            </div>
            <div className='type'>
                {post.type}
            </div>
            <div className='title' >
                <h1>{post.title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{__html: post.text}}>

            </div>

            <Link to={POST_ROUTE + '/' + post.id}>Читать полностью</Link>
        </div>
    );
};

export default PostItem;