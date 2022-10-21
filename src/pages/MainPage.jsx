import React from 'react';
import PostList from "../components/Post/PostList/PostList";
import TypeBar from "../components/TypeBar/TypeBar";

const MainPage = () => {
    return (
        <div>
            <TypeBar/>
            <PostList/>
        </div>
    );
};

export default MainPage;