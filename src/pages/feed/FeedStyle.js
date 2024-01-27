import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  justify-content: start;
  height: 88vh;

  hr {
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    margin: 18px;
    width: 355px;
    height: 1px;
    border: none;
  }
`;

export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;
  width: 364px;
  align-items: top;
  text-align: start;
  row-gap: 10px;
  margin: 0;
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

  textarea {
    width: 364px;
    height: 131px;
    min-width: 364px; 
    max-width: 364px; 
    min-height: 131px;
    max-height: 600px;


    flex-shrink: 0;
    border-radius: 12px;
    background: #ededed;
    color: #6f6f6f;
    font-family: IBM Plex Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
  }

  textarea::placeholder {
    padding: 16px 0 0 16px;
    color: #6f6f6f;

    font-family: IBM Plex Sans;
    font-size: 18px;
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
  border-radius: 12px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  color: white;
  border: none;
  margin-top: 12px;
`;
