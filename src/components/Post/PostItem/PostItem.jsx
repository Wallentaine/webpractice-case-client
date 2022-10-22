import React from 'react';
import classes from './PostItem.module.css'
import image from '../../../assets/Foto_stati.png'
import {Link} from "react-router-dom";
import {POST_ROUTE} from "../../../utils/consts";
import {useScrollUp} from "../../../hooks/useScrollUp";

const PostItem = ({post}) => {

    const navigate = useScrollUp()

    return (
        <div className={classes.postItem} onClick={() => navigate(POST_ROUTE + '/' + post.id)}>
            <div className={classes.imgBlock}>
                <img src={image} alt=""/>
            </div>
            <div className={classes.content}>
                <div className={classes.title}>
                    {post.title}
                </div>
                <div className={classes.text} dangerouslySetInnerHTML={{__html: post.text}}>
                </div>

                <div>
                    {post.type}
                </div>

                <div className={classes.footer}>
                    <div>
                        {post.userName}
                    </div>
                    <div >
                        {post.createdAt}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;