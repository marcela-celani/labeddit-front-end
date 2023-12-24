import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/Coordinator";
import { Form, Button, Container, ContainerLogo } from "./SignupStyle";
import Header from "../../components/header/Header";

const SignupPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const loggedEmail = e.target.email.value;
    const loggedPassword = e.target.password.value;
    console.log(loggedEmail, loggedPassword);

    goToLogin(navigate);
  };

  return (
    <div>
      <Header />
      <Container>
        <ContainerLogo>
          <div>
            <h1>Olá, boas vindas ao LabEddit ;)</h1>
          </div>
        </ContainerLogo>
        <Form onSubmit={onSubmitForm}>
          <input type="name" name="name" placeholder="Apelido" />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Senha" />

          <p>
            Ao continuar, você concorda com o nosso <a href="">Contrato de usuário</a> e nossa <a href="">Política de Privacidade</a>
          </p>
          <div className="check">
            <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
          </div>
          <Button className="orange" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignupPage;
