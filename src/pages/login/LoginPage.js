import React from "react";
import logo from "../../assets/logo.svg";
import { Button, Container, ContainerLogo, Form } from "./LoginStyle";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/Coordinator";

const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const loggedEmail = e.target.email.value;
    const loggedPassword = e.target.password.value;
    console.log(loggedEmail, loggedPassword);
    goToFeed(navigate);
  };

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
        <Form onSubmit={onSubmitForm}>
          <input type="email" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Senha" />
          <Button className="orange" type="submit">Continuar</Button>
        </Form>
        <hr />
        <Button className="white" onClick={() => goToSignUp(navigate)}>
          Crie uma conta!
        </Button>
      </Container>
    </>
  );
};

export default LoginPage;
