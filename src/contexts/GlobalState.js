import { useState } from "react";
// import commentsDB from '../assets/commentsDB'
// import PostCard from "../components/postcard/PostCard";
// import CommentCard from "../components/commentcard/CommentCard";
import { BASE_URL } from "../constants/baseURL";
import { useRequestData } from "../hooks/useRequestData";
import { GlobalStateContext } from "./GlobalContext";


export const GlobalState = ({ children }) => {
    const [tela, setTela] = useState([])
    const [posts, setPosts, loading] = useRequestData(`${BASE_URL}/posts`, [])

    return (
        <GlobalStateContext.Provider value={{tela, setTela, posts, setPosts, loading}} >
            {children}
        </GlobalStateContext.Provider>
    );
};


// const ContextProvider = ({ children }) => {
//     const [tela, setTela] = useState([])
//     const [posts, setPosts, loading] = useRequestData(`${BASE_URL}/recipe/all`, [])
//     const [comments, setComments] = useState([])

//     useEffect(()=> {
//         getPosts()
//         arrayComments()
//     }, [])

    
    // const signUp = async () => {
    //     try {

    //         const body = {
    //             name,
    //             email,
    //             password
    //         }


    //         const resp = await axios.post('https://labeddit-back-end-susu.onrender.com/users/signup', body);
    //         const postsData = resp.data;

    //         setPosts(postsData.map(post => <PostCard posts={post} id={post.id} key={post.id} />));
    
    //     } catch (error) {
    //         console.log('erro', error);
    //     }
    // }


//     const getPosts = async () => {

//         try {
//             const resp = await axios.get('https://labeddit-back-end-susu.onrender.com/posts');
//             const postsData = resp.data;

//             setPosts(postsData.map(post => <PostCard posts={post} id={post.id} key={post.id} />));
    
//         } catch (error) {
//             console.log('erro', error);
//         }
//     };

//     const arrayComments = () => {

//         const comments = commentsDB.map((comment) => (
//             <CommentCard comments={comment} key={comment.id} />
//         ));

//         setComments(comments)
//     };
   
//     return(
//         <GlobalContext.Provider value={{tela, setTela, posts, comments}}>
//             {children}
//         </GlobalContext.Provider>
//     )
// }

// export default ContextProvider;