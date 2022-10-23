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
import Loading from "../components/UI/Loading/Loading";

const MainPage = observer( () => {

    const {post} = useContext(Context)
    const [openTypes, setOpenTypes, typesRef] = useDropdown()

    const [fetchPosts, isLoadingPosts, postsError] = useFetching(async () => {
        if (post.selectedType.id === 0)
        await fetchAllPosts().then(data => post.setPosts(data.rows))
        else await fetchAllPosts(post.selectedType.id).then(data => post.setPosts(data.rows))
    })

    const [fetchTypes, isLoadingTypes, typesError] = useFetching(async () => {
        const types = await fetchAllTypes()
        post.setTypes([{id: 0, title: 'Все новости'}, ...types])
    })

    useEffect(() => {
        fetchTypes()
    }, [])

    useEffect(() => {
        fetchPosts()
    }, [post.selectedType])

    if (isLoadingTypes || isLoadingPosts)

        return (<Loading isLoading={(isLoadingTypes || isLoadingPosts)}/>)

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
                        {post.selectedType.title} {openTypes ? <img src={svgUp}/> : <img src={svgDown}/>}
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
                                {type.title}
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