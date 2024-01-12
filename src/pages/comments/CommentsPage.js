import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { GlobalContext } from '../../contexts/GlobalContext'
import { Button, Form, Container, ContainerPosts } from '../comments/CommentsStyle'
import PostCard from '../../components/postcard/PostCard'

const CommentsPage = () => {

  const {arrayComments} = useContext(GlobalContext)

  return (
    <div>
      <Header />
      {/* <PostCard /> */}
      <Container>
        <Form>
          <textarea placeholder='Escreva seu post...'></textarea>
          <Button>Postar</Button>
        </Form>
        <hr />
        <ContainerPosts>
          {arrayComments()}
        </ContainerPosts>
      </Container>
    </div>
  )
}

export default CommentsPage
