import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 9px 10px;
  flex-direction: column;
  row-gap: 10px;
  align-items: flex-start;
  gap: 18px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background: #fbfbfb;

  div {
    align-items: start;
    text-align: left;
    p {
      color: #6f6f6f;

      text-align: center;
      font-family: IBM Plex Sans;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: left;
    }
    h3 {
      color: #000;
      margin: 18px 0 0 0;
      font-family: IBM Plex Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const ContainerLikes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  div {
    display: flex;
    padding: 4.667px;
    justify-content: center;
    align-items: center;
    gap: 11px;
    border-radius: 28px;
    border: 0.793px solid #ececec;
  }
`;

export const Button = styled.button`
  width: 18.667px;
  height: 18.667px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .arrow-up-icon, .arrow-down-icon, .comments-icon {
  fill: #6F6F6F; 
  }

  .arrow-up-icon:hover {
  fill: green; 
  }

  .arrow-down-icon:hover {
  fill: red; 
  }

  .comments-icon:hover {
    fill: orange;
  }
`;
