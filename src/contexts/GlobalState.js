import { useState } from "react";
import { BASE_URL } from "../constants/baseURL";
import { useRequestData } from "../hooks/useRequestData";
import { GlobalStateContext } from "./GlobalContext";


export const GlobalState = ({ children }) => {
    const [posts, setPosts, loading] = useRequestData(`${BASE_URL}/posts`, [])
    const [selectedPost, setSelectedPost] = useState('')

    return (
        <GlobalStateContext.Provider value={{posts, setPosts, loading, selectedPost, setSelectedPost}} >
            {children}
        </GlobalStateContext.Provider>
    );
};
