import React, { useContext } from "react";
import Header from "../../components/header/Header";
import {
  Button,
  Form,
  Container,
  ContainerPosts,
} from "../comments/CommentsStyle";
import PostCard from "../../components/postcard/PostCard";
import CommentCard from "../../components/commentcard/CommentCard";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/baseURL";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalStateContext } from "../../contexts/GlobalContext";
import Loading from "../../components/loading/Loading";
import ErrorPage from '../error/ErrorPage'

const CommentsPage = () => {
  useProtectedPage();
  const navigate = useNavigate();

  const { post_id } = useParams();
  const comments = useRequestData(
    `${BASE_URL}/posts/${post_id}/comments`,
    []
  )[0];

  const { posts, loading, likeComment, dislikeComment } = useContext(GlobalStateContext);

  if (loading || posts.length === 0) {
    return <Loading />;
  }

  const post = posts.find((post) => post.id === post_id);

  if (!post) {
    return <ErrorPage />;
  }

  const commentslist =
    comments && comments.length ? (
      comments.map((comment) => {
        return (
          <CommentCard 
          key={comment.id} 
          comment={comment} 
          navigate={navigate}
          likeComment = {likeComment}
          dislikeComment = {dislikeComment}
           />
        );
      })
    ) : (
      <p>Essa postagem não possui comentários ainda</p>
    );

  console.log(commentslist);

  return (
    <div>
      <Header />
      <Container>
      <ContainerPosts>
        <PostCard key={post.id} post={post} navigate={navigate} />
      </ContainerPosts>
        <Form>
          <textarea placeholder="Escreva seu post..."></textarea>
          <Button>Responder</Button>
        </Form>
        <hr />
        <ContainerPosts>{commentslist}</ContainerPosts>
      </Container>
    </div>
  );
};

export default CommentsPage;
