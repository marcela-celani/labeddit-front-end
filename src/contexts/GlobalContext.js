import { createContext, useState } from "react";
import axios from 'axios'
import  postsDB from '../assets/postsDB'
import  commentsDB from '../assets/commentsDB'
import PostCard from "../components/postcard/PostCard";
import CommentCard from "../components/commentcard/CommentCard";

export const GlobalContext = createContext()

const ContextProvider = ({ children }) => {
    const [tela, setTela] = useState([])
    
    const arrayPosts = () => {

        return postsDB.map((post) => (
            <PostCard posts={post} id={post.id} key={post.id} />
        ));
    };

    const arrayComments = () => {

        return commentsDB.map((comment) => (
            <CommentCard comments={comment} key={comment.id} />
        ));
    };
   
    return(
        <GlobalContext.Provider value={{tela, setTela, arrayPosts, arrayComments}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider;