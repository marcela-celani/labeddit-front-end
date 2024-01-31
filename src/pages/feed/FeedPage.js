import React, { useContext, useEffect } from "react";
import Header from "../../components/header/Header";
import PostCard from "../../components/postcard/PostCard";
import { Button, Container, ContainerPosts, Form } from "./FeedStyle";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { GlobalStateContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { useForm } from "../../hooks/useForm";

const FeedPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const {
    posts,
    setPosts,
    getPosts,
    loading,
    setLoading,
    likePost,
    dislikePost,
    newPost,
  } = useContext(GlobalStateContext);

  const [form, onChange] = useForm({
    textarea: "",
  });

  useEffect(() => {
    getPosts();
  });

  const postField = async (e) => {
    e.preventDefault();
    if (Object.values(form).some((value) => value === "")) {
      alert("Por favor, preencha o campo de texto da sua postagem");
      return;
    }
    try {
      setLoading(true);
      await newPost(form);
    } catch (error) {
      console.error("Error creating new post:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  const postsList =
    posts && posts.length ? (
      posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          navigate={navigate}
          likePost={likePost}
          dislikePost={dislikePost}
        />
      ))
    ) : (
      <p>Nenhuma postagem disponível para visualização</p>
    );

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={postField}>
          <textarea
            placeholder="Escreva seu post..."
            name="textarea"
            value={form.textarea}
            onChange={onChange}
          ></textarea>
          <Button>Postar</Button>
        </Form>
        <hr />
        <ContainerPosts>{postsList}</ContainerPosts>
      </Container>
    </>
  );
};

export default FeedPage;
