import React, {useContext} from 'react';
import classes from './PostList.module.css'
import PostItem from "../PostItem/PostItem";
import {Context} from "../../../index";

const PostList = () => {

    const {post} = useContext(Context)


    return (
        <div className={classes.postList}>
            {post.posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostList;