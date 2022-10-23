import React, {useContext, useEffect} from 'react';
import PostList from "../components/Post/PostList/PostList";
import {Context} from "../index";
import TodayPostList from "../components/Post/TodayPostList/TodayPostList";
import DropdownMenu from "../components/UI/DropdownMenu/DropdownMenu";
import {useDropdown} from "../hooks/useDropdown";
import DropdownItem from "../components/UI/DropdownMenu/DropdownItem";
import {observer} from "mobx-react-lite";
import svgDown from '../assets/icon-arrow-down.svg'
import svgUp from '../assets/icon-arrow-up.svg'
import {useFetching} from "../hooks/useFetching";
import {fetchAllPosts} from "../http/posts/postAPI";
import {fetchAllTypes} from "../http/posts/typeAPI";

const MainPage = observer( () => {

    const {post} = useContext(Context)
    const [openTypes, setOpenTypes, typesRef] = useDropdown()
    const [fetchPosts, isLoadingPosts, postsError] = useFetching(async () => {
        const posts = await fetchAllPosts(post.selectedType.id)
    })

    const [fetchTypes, isLoadingTypes, typesError] = useFetching(async () => {
        const types = await fetchAllTypes()
        post.setTypes(types)
        console.log(post.types)
    })

    useEffect(() => {
        fetchTypes()
    }, [])

    useEffect(() => {

    }, [])

    return (
        <div className='page'>
            <div className='pageTitle'>
                <h2>Последние новости</h2>
            </div>

            <TodayPostList posts={post.todayPosts}/>
            <div className='pageTitle'>

                <h2>Новости</h2>

                <div ref={typesRef}>

                    <div className='dropdownTitle'
                         onClick={() => setOpenTypes(!openTypes)}
                    >
                        {post.selectedType.name} {openTypes ? <img src={svgUp}/> : <img src={svgDown}/>}
                    </div>

                    <DropdownMenu
                        open={openTypes}
                        setOpen={setOpenTypes}
                        ref={typesRef}
                    >
                        {post.types.map((type) =>
                            <DropdownItem
                                key={type.id}
                                onClick={() => {
                                post.setSelectedType(type)
                                    setOpenTypes(false)
                            }}
                            >
                                {type.name}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </div>
            </div>
            <PostList posts={post.posts} style={{flexDirection: 'column'}}/>
        </div>
    );
});

export default MainPage;