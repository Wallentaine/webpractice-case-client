import React from 'react';
import classes from './TodayPostItem.module.css'
import {POST_ROUTE} from "../../../utils/consts";
import {useScrollUp} from "../../../hooks/useScrollUp";

const TodayPostItem = ({post}) => {

    const navigate = useScrollUp()

    return (
        <div className={classes.todayPostItem} onClick={() => navigate(POST_ROUTE + '/' + post.id)}>

            <div className={classes.preview}>
                {post.title}
            </div>
        </div>
    );
};

export default TodayPostItem;