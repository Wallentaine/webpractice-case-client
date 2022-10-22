import React from 'react';
import classes from './PostList.module.css'
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, ...props}) => {

    return (
        <div className={classes.postList} {...props}>
            {posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostList;