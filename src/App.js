import Navbar from "./components/Nav/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import {useContext, useEffect, useState} from "react";
import {useFetching} from "./hooks/useFetching";
import {check} from "./http/posts/userAPI";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import Loading from "./components/UI/Loading/Loading";


const App = observer( () => {

    const {user} = useContext(Context)

    const [load, isLoad] = useState(true)


    useEffect(() =>{
        check().then((data) => {
            if (data){
                user.setUser(data)
                user.setIsAuth(true)

            }

        }).finally(() => isLoad(false))
    }, [user])

    if (load)
        return (<Loading isLoading={load}/>)

    return (
    <div className="App">
        <BrowserRouter>
            <Navbar isCheckLoading={load}/>
           <AppRouter/>
            <Footer/>
        </BrowserRouter>

    </div>
  )
}
)
export default App;
