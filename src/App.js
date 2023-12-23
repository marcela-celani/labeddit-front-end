import React from "react";
import { useState } from "react";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import FeedPage from "./pages/feed/FeedPage";
import CommentsPage from "./pages/comments/CommentsPage";



const App = () => {

  const [tela, setTela] = useState('login')

  const renderizarTela = () => {
    if (tela === 'login'){
      return <LoginPage tela={tela} setTela={setTela}/>
    } else if (tela === 'signup') {
      return <SignupPage tela={tela} setTela={setTela}/>
    } else if (tela === 'feed') {
      return <FeedPage tela={tela} setTela={setTela}/>
    } else if (tela === 'comments') {
        return <CommentsPage tela={tela} setTela={setTela}/>
    } else {
      console.log('Página de erro')
    }
  }

  return (
    <div>
      {renderizarTela()}
    </div>
  );
}

export default App;