import React from 'react'
import Header from '../../components/header/Header'
import { Button, Container, ContainerPosts, Form } from './FeedStyle'
import PostCard from '../../components/postcard/PostCard'

const FeedPage = () => {
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
            <PostCard />
            <PostCard />
            <PostCard />
        </ContainerPosts>
      </Container>
    </>
  )
}

export default FeedPage
