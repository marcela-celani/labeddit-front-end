import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/Coordinator";
import { Form, Button, Container, ContainerLogo } from "./SignupStyle";
import Header from "../../components/header/Header";
import {useForm} from '../../hooks/useForm'
import { emailPattern, namePattern, passwordPattern } from '../../constants/patterns'
import { BASE_URL } from "../../constants/baseURL";
import axios from "axios";
import { setStorageItem } from "../../utils/storageManager";
import Loading from "../../components/loading/Loading";

const SignupPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false)
  const [form, onChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const signup = (e) => {
    e.preventDefault();
    console.log(form)
    setLoading(true)

    axios.post(`${BASE_URL}/users/signup`, form)
      .then((res) => {
        setStorageItem("token", res.data.token)
        goToLogin(navigate);
      })
      .catch((err) => {
        console.log(err.response.data)
        alert(err.response.data.message || "Erro inesperado, tente novamente")
      })
      .finally(() => { setLoading(false) })
  }

  return (
    <div>
      <Header />
      <Container>
        <ContainerLogo>
          <div>
            <h1>Olá, boas vindas ao LabEddit ;)</h1>
          </div>
        </ContainerLogo>
        <Form onSubmit={signup}>
          <input
            type="name"
            name="name"
            placeholder="Apelido"
            pattern={namePattern}
            value={form.value}
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            pattern={emailPattern}
            title="Digite um email válido"
            value={form.value}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            pattern={passwordPattern}
            title="Digite um password válido"
            value={form.value}
            onChange={onChange}
          />

          <p>
            Ao continuar, você concorda com o nosso <a href='/signup'>Contrato de usuário</a> e nossa <a href='/signup'>Política de Privacidade</a>
          </p>
          <div className="check">
            <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
          </div>
          <Button className="orange" type="submit">{
            loading
              ?
              <Loading size="20px" />
              :
              "Cadastrar"
          }</Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignupPage;
