import MainPage from "./pages/MainPage";
import {MAIN_ROUTE, POST_ROUTE} from "./utils/consts";
import PostPage from "./pages/PostPage";


export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: POST_ROUTE + '/:id',
        Component: PostPage
    },
]

export const authRoutes = [

]


