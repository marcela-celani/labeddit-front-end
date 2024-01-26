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

const CommentsPage = () => {
  useProtectedPage();
  const navigate = useNavigate();

  const { post_id } = useParams();
  const { posts, setPosts, loading } = useContext(GlobalStateContext);
  const post = posts.find((post) => post.id === post_id);

  console.log(post);

  const comments = useRequestData(
    `${BASE_URL}/posts/${post_id}/comments`,
    []
  )[0];
  const commentslist =
    comments && comments.length ? (
      comments.map((comment) => {
        return (
          <CommentCard key={comment.id} comment={comment} navigate={navigate} />
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
          <Button>Postar</Button>
        </Form>
        <hr />
        <ContainerPosts>{commentslist}</ContainerPosts>
      </Container>
    </div>
  );
};

export default CommentsPage;
