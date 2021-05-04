import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Oxygen', sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body {
    background: rgb(65,56,148);
    background: linear-gradient(90deg, rgba(65,56,148,1) 0%, rgba(104,114,189,1) 0%, rgba(74,5,164,1) 100%);
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
  display: flex;
  justify-content: space-around;
  & button {
        cursor: pointer;
        font-size: 3em;
        color: red;
        margin: 20px 0;
        border: 0;
        background: inherit;
    }
    & button:first-of-type {
      color: #888;
    }
    & button:last-of-type {
      color: darkred;
      background: rgb(255,136,0);
      background: linear-gradient(180deg, rgba(255,136,0,1) 0%, rgba(255,0,0,1) 35%, rgba(136,0,0,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    & button:focus {
      outline: none;
    }
`

export const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  text-align: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.7);;
  width: 310px;
  height: 560px;
`