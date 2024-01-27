import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 92vh;
  padding: 0 8vw;

  p {
    color: #000;
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: auto;
  }

  a {
    color: #4088cb;
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 6vh;

  h1 {
    color: #373737;
    font-family: IBM Plex Sans;
    font-size: 33px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 3vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    border-radius: 4px;
    border: 1px solid #d5d8de;
    background: #fff;

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
  p {
      margin-top: 5vh;
    }

  .check {
    margin-top: 1vh;

    p {
      margin-top: 0;
    }
  }

  div {
    display: flex;
    flex-direction: row;  
    align-items: center; 

    .checkbox {
      margin-right: 10px;
    }
  }
`;

export const Button = styled.button`
  display: flex;

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
    margin-bottom: 10vh;
    margin-top: 5vh;
  }
`;
