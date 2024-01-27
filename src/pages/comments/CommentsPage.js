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
import { useForm } from "../../hooks/useForm";

const CommentsPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const [form, onChange] = useForm({
    textarea: ''
  });

  const { post_id } = useParams();
  const comments = useRequestData(
    `${BASE_URL}/posts/${post_id}/comments`,
    []
  )[0];

  const { posts, loading, setLoading, likeComment, dislikeComment, newComment, likePost, dislikePost } = useContext(GlobalStateContext);

  const postField = async (e) => {
    e.preventDefault();
    if (Object.values(form).some(value => value === '')) {
      alert("Por favor, preencha o campo de texto do seu comentário");
      return; 
    }

    try {
      setLoading(true);
      await newComment(form, post_id);
    } catch (error) {
      console.error('Error creating new post:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

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

  return (
    <div>
      <Header />
      <Container>
      <ContainerPosts>
        <PostCard 
         key={post.id}
         post={post}
         navigate={navigate}
         likePost={likePost}
         dislikePost={dislikePost}
         />
      </ContainerPosts>
        <Form onSubmit={postField}>
          <textarea 
          placeholder="Escreva seu comentário..."
          name="textarea"
          value={form.textarea}
          onChange={onChange}
          ></textarea>
          <Button>Responder</Button>
        </Form>
        <hr />
        <ContainerPosts>{commentslist}</ContainerPosts>
      </Container>
    </div>
  );
};

export default CommentsPage;
