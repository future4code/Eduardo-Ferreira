import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani', sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body {
    background: ${props => props.theme.colors.secundary};
    overflow: hidden;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export default GlobalStyle;

const spin = keyframes`
   to{transform:rotate(360deg);}
`

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15px;
  margin-left: -15px;
  opacity: ${({ load }) => (load ? 1 : 1)};
  border: 5px solid #555;
  height: 30px;
  width: 30px;
  border-left-color: darkorange;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
  transition: all 0.3s ease;
`
export const Buttons = styled.div`
  & button {
        color: #fff;
        margin: 20px 0;
        border: 0;
        padding: 14px;
    }
    & button:first-of-type {
        background: red;
    }
    & button:last-of-type {
        background: green;
        margin-left: 20px;
    }
`

export const MainContainer = styled.div`
  position: relative;
  text-align: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px #000;
  width: 310px;
  height: 540px;
`