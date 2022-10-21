import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/app.css'
import PostStore from "./store/PostStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Context.Provider value={{

        post: new PostStore(),

    }}>
        <App/>
    </Context.Provider>
)
