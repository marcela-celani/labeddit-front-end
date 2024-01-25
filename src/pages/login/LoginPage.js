import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Button, Container, ContainerLogo, Form } from "./LoginStyle";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/Coordinator";
import { useForm } from "../../hooks/useForm";
// import { emailPattern, passwordPattern } from "../../constants/patterns";
import axios from "axios";
import { BASE_URL } from "../../constants/baseURL";
import { setStorageItem } from "../../utils/storageManager";
import Loading from "../../components/loading/Loading";


const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [form, onChange] = useForm({
    email: '',
    password: ''
  })


  const login = (e) => {
    e.preventDefault();
    setLoading(true)
    axios.post(`${BASE_URL}/users/login`, form)
      .then((res) => {
        setStorageItem("token", res.data.token)
        goToFeed(navigate)
      })
      .catch((err) => {
        console.log(err.response)
        alert(err.response.data.message || "Erro inesperado, tente novamente")
      })
      .finally(() => { setLoading(false) })
  }

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
        <Form onSubmit={login}>
          <input 
          type="email" 
          name="email"
          // pattern={emailPattern}
          value={form.value}
          onChange={onChange} 
          placeholder="E-mail" />
          <input 
          type="password" 
          name="password"
          // pattern={passwordPattern}
          value={form.value}
          onChange={onChange} 
          placeholder="Senha" />
          <Button className="orange" type="submit">{
            loading
              ?
              <Loading size="20px" />
              :
              "Continuar"
          }</Button>
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
