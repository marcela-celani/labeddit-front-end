import React from 'react'
import Header from '../../components/header/Header'
import { Button, Container, ContainerPosts, Form } from './FeedStyle'
import { useProtectedPage } from '../../hooks/useProtectedPage'

const FeedPage = () => {

  useProtectedPage()

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

        </ContainerPosts>
      </Container>
    </>
  )
}

export default FeedPage
