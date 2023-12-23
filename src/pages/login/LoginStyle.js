import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  hr {
    color: #fe7e02;
    margin: 18px;
    width: 355px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 100px 0;
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
