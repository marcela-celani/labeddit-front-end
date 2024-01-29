import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CircularLoading =  styled.img`
  width: ${props => props.size};
  animation: ${rotate} 1.2s linear infinite;
`

export const LoadingContainer = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
`