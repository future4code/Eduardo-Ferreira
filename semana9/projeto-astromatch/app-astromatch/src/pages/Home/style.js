import styled from "styled-components";

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
    position: relative;
    width: 300px;
    height: 400px;
    background-image: url(${({photo}) => (photo)});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`

export const NameAgeDesc = styled.div`
    color: #fff;
    position: absolute;
    bottom: 0;
    padding: 20px 20px;
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