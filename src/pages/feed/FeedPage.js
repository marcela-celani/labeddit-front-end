import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { Button, Container, ContainerPosts, Form } from './FeedStyle'
import { GlobalContext } from '../../contexts/GlobalContext'

const FeedPage = () => {

  const {arrayPosts} = useContext(GlobalContext)

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
          {arrayPosts()}

        </ContainerPosts>
      </Container>
    </>
  )
}

export default FeedPage
