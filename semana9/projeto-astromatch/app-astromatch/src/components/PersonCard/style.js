import styled, {keyframes} from "styled-components";


export const MainContainer = styled.div`
    text-align: center;
    background-image: url("");
    & button {
        color: #fff;
        margin-top: 40px;
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

export const MainContent = styled.div`
    box-shadow: 0 0 8px #bbb;
    position: relative;
    height: 400px;
    transform: scale(0.9);
    border-radius: 8px;
    background-image: url(${({photo}) => (photo)});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`

export const NameAgeDesc = styled.div`
    color: #000;
    position: absolute;
    bottom: 0;
    padding: 20px;
    margin: 15px;
    width: 90%;
    border-radius: 6px;
    background: rgba(255,255,255, 0.9);
    & span {
        margin-left: 5px;
    }
`

export const NameAge = styled.div`
    display: flex;
    flex-flow: row nowrap;
    & h4 {

    }
    & span {

    }
`

export const Description = styled.p`
    margin-top: 10px;
    text-align: left;
`