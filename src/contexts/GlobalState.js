import { useState } from "react";
import { BASE_URL } from "../constants/baseURL";
import { useRequestData } from "../hooks/useRequestData";
import { GlobalStateContext } from "./GlobalContext";
import axios from "axios";
import { getHeaders } from "../utils/storageManager";


export const GlobalState = ({ children }) => {
    const [posts, setPosts, loading] = useRequestData(`${BASE_URL}/posts`, [])

    const [data, setData] = useState('')

    const likePost = async (post_id) => {
        const url = `${BASE_URL}/posts/${post_id}/like`
        const body = {
            "like": true
        }
    const response = await axios.put(url, body, getHeaders())
    console.log(response)
    }

    const dislikePost = async (post_id) => {
        const url = `${BASE_URL}/posts/${post_id}/like`
        const body = {
            "like": false
        }
    const response = await axios.put(url, body, getHeaders())
    console.log(response)
    }

    const likeComment = async (post_id, comment_id) => {
        const url = `${BASE_URL}/posts/${post_id}/comments/${comment_id}/like`
        const body = {
            "like": true
        }
    const response = await axios.put(url, body, getHeaders())
    console.log(response)
    }

    const dislikeComment = async (post_id, comment_id) => {
        const url = `${BASE_URL}/posts/${post_id}/comments/${comment_id}/like`
        const body = {
            "like": false
        }
    const response = await axios.put(url, body, getHeaders())
    console.log(response)
    }
    

    return (
        <GlobalStateContext.Provider value={{posts, setPosts, loading, likePost, dislikePost, likeComment, dislikeComment}} >
            {children}
        </GlobalStateContext.Provider>
    );
};
