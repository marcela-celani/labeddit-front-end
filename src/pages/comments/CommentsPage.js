import React from 'react'
import Header from '../../components/header/Header'
import { Button, Form, Container, ContainerPosts } from '../comments/CommentsStyle'
import PostCard from '../../components/postcard/PostCard'

const CommentsPage = () => {

  // const {comments, posts} = useContext(GlobalContext)

  return (
    <div>
      <Header />
      <PostCard id = 'p001'/>
      <Container>
        <Form>
          <textarea placeholder='Escreva seu post...'></textarea>
          <Button>Postar</Button>
        </Form>
        <hr />
        <ContainerPosts>
        </ContainerPosts>
      </Container>
    </div>
  )
}

export default CommentsPage
