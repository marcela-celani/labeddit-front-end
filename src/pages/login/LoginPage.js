import React from 'react'
import logo from '../../assets/logo.svg'
import { Button, Container, ContainerLogo, Form } from './LoginStyle'

const LoginPage = () => {
  return (
    <>
      <Container>
        <ContainerLogo>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h1>LabEddit</h1>
            <h3>O projeto de rede social da Labenu</h3>
          </div>
        </ContainerLogo>
        <Form>
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder='Senha' />
          <Button className='orange'>Continuar</Button>
        </Form>
        <hr />
        <Button className='white'>Crie uma conta!</Button>
      </Container>
    </>
  )
}

export default LoginPage
