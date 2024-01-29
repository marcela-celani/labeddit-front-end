import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/baseURL";
import { useRequestData } from "../hooks/useRequestData";
import { GlobalStateContext } from "./GlobalContext";
import axios from "axios";
import { getHeaders } from "../utils/storageManager";


export const GlobalState = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)



    const newPost = async (form) => {
        const url = `${BASE_URL}/posts/`
        const body = {
            content: form.textarea
        }

        axios.post(url, body, getHeaders())

        .then((res) => {
            alert("Novo post realizado com sucesso!")
            setPosts(res.data)
        })
        .catch((err) => {
          console.log(err.response)
          alert("Erro inesperado, tente novamente")
        })
        .finally(() => { setLoading(false) })
    }

    const newComment = async (form, post_id) => {
        const url = `${BASE_URL}/posts/${post_id}/comments`
        const body = {
            content: form.textarea
        }

        axios.post(url, body, getHeaders())

        .then((res) => {
            console.log(res)
            alert("Novo comentário realizado com sucesso!")
        })
        .catch((err) => {
          console.log(err.response)
          alert("Erro inesperado, tente novamente")
        })
        .finally(() => { setLoading(false) })
    }
    

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
        <GlobalStateContext.Provider value={{comments, setComments,  posts, setPosts, loading, setLoading, likePost, dislikePost, likeComment, dislikeComment, newPost, newComment}} >
            {children}
        </GlobalStateContext.Provider>
    );
};
