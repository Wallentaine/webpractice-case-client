import React from 'react';
import TodayPostItem from "../TodayPostItem/TodayPostItem";
import classes from './TodayPostList.module.css'

const TodayPostList = ({posts, ...props}) => {
    return (
            <div className={classes.todayPostList} {...props}>
                {posts.map(post =>
                    <TodayPostItem key={post.id} post={post}/>
                )}

            </div>
    );
};

export default TodayPostList;