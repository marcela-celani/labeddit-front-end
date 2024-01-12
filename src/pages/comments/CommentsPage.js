import React from 'react'
import Header from '../../components/header/Header'
import { Button, Container, ContainerPosts } from '../feed/FeedStyle'
import { Form } from 'react-router-dom'
import PostCard from '../../components/postcard/PostCard'

const CommentsPage = () => {
  return (
    <div>
      <Header />

      <Container>

        <hr />
        <ContainerPosts>

        </ContainerPosts>
      </Container>
    </div>
  )
}

export default CommentsPage
