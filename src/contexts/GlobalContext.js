import { createContext, useState } from "react";
import axios from 'axios'
import  postsDB from '../assets/postsDB'
import PostCard from "../components/postcard/PostCard";

export const GlobalContext = createContext()

const ContextProvider = ({ children }) => {
    const [tela, setTela] = useState([])

    const arrayPosts = () => {
        console.log(postsDB)
        return postsDB.map((post) => (
            <PostCard posts={post} id={post.id} key={post.id} />
        ));
    };
   
    return(
        <GlobalContext.Provider value={{tela, setTela, arrayPosts}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider;