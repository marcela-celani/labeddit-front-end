import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage"
import SignupPage from "../pages/signup/SignupPage"
import FeedPage from "../pages/feed/FeedPage"
import CommentsPage from "../pages/comments/CommentsPage"
import ErrorPage from "../pages/error/ErrorPage"

const Router = () => {
    return (      
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element ={<LoginPage />} />
                    <Route path="/signup" element ={<SignupPage />} />
                    <Route path="/" element ={<FeedPage />} />
                    <Route path="/posts/:post_id/comments" element ={<CommentsPage />} />
                    <Route path="*" element ={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
    )
}

export default Router