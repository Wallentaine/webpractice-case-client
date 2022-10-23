import MainPage from "./pages/MainPage";
import {CREATE_ARTICLE_ROUTE,
    MAIN_ROUTE,
    POST_ROUTE,
    REGISTRATION_ROUTE,
    SCHEDULE_ROUTE, USER_LIST_ROUTE,
    USER_ROUTE
} from "./utils/consts";
import PostPage from "./pages/PostPage";
import RegistrationPage from "./pages/RegistrationPage";
import SchedulePage from "./pages/SchedulePage";
import UserPage from "./pages/UserPage";
import UserListPage from "./pages/UserListPage";
import CreateArticlePage from "./pages/CreateArticlePage";
import ArticlePage from "./pages/ArticlePage";


export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: POST_ROUTE + '/:id',
        Component: ArticlePage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage
    },

]

export const authRoutes = [
    {
        path: SCHEDULE_ROUTE,
        Component: SchedulePage
    },
    {
        path: USER_ROUTE,
        Component: UserPage
    },

]

export const workerRoutes = [
    {
        path: CREATE_ARTICLE_ROUTE,
        Component: CreateArticlePage
    },
]

export const adminRoutes = [
    {
        path: USER_ROUTE,
        Component: UserPage
    },
    {
        path: USER_LIST_ROUTE,
        Component: UserListPage
    },

]




