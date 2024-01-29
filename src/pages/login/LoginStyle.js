import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  hr {
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    margin: 18px;
    width: 355px;
    height: 1px;
    border: none;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 100px 0;
  h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h3 {
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    border-radius: 4px;
    border: 1px solid #d5d8de;
    background: #fff;
    width: 343px;
    height: 60px;
    margin-bottom: 8px;
    padding-left: 20px;

    color: #000;

    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 365px;
  padding: 13px 0px;
  justify-content: center;
  gap: 10px;
  text-align: center;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

&:hover {
  transform: scale(1.05); /* Ajuste o valor conforme necessário para o efeito desejado */
  transition: transform 0.3s ease; /* Adicione uma transição para suavizar o efeito */
}

  &.orange {
    border-radius: 27px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
    border: none;
    margin-top: 56px;
  }

  &.white {
    border-radius: 27px;
    border: 1px solid #fe7e02;
    color: #fe7e02;
    width: auto;
    width: 365px;
  }
`;
