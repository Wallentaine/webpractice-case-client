import {useNavigate} from "react-router-dom";

export const useScrollUp = () => {
    const nav = useNavigate()


    const navigate = (url) => {
        nav(url)
        window.scrollTo(0,0)
    }

    return navigate
 }