import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/app.css'
import PostStore from "./store/PostStore";
import UserStore from "./store/UserStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Context.Provider value={{

        post: new PostStore(),
        user: new UserStore(),

    }}>
        <App/>
    </Context.Provider>
)
