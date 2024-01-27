import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  text-align: center;
  align-items: center;
  height: 8vh;
  width: 100vw;
  background: #ededed;

  img {
    width: 28.023px;
    height: 28.639px;
  }
`;

export const Button = styled.button`
  color: #4088cb;
  text-align: center;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;  
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;

export const XButton = styled.button`
  border: none;
  img {
    width: 23px;
    height: 23px;
  }

  cursor: pointer;


`;
