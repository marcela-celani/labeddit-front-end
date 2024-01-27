import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import PostCard from '../../components/postcard/PostCard'
import { Button, Container, ContainerPosts, Form } from './FeedStyle'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { GlobalStateContext } from '../../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/baseURL'

const FeedPage = () => {

  useProtectedPage()
  useRequestData(`${BASE_URL}/posts`, [])

  const { posts, loading, likePost, dislikePost } = useContext(GlobalStateContext)

  const navigate = useNavigate()

  if (loading) {
    return <Loading />
  }

  const postsList = posts && posts.length ? posts.map((post) => {
    return (
        <PostCard
          key={post.id}
          post={post}
          navigate={navigate}
          likePost = {likePost}
          dislikePost = {dislikePost}
        />

    )
  })
    :
    <p>Nenhuma postagem disponível para visualização</p>

  return (
    <>
      <Header />
      <Container>
        <Form>
          <textarea placeholder='Escreva seu post...'></textarea>
          <Button>Postar</Button>
        </Form>
        <hr />
        <ContainerPosts>
            {postsList}
        </ContainerPosts>
      </Container>
    </>
  )
}

export default FeedPage
