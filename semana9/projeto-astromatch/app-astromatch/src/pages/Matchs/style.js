import styled from "styled-components";

export const Container = styled.div`
    overflow-y: auto;
    padding: 14px 0;
    height: 100%;
    & p {
        margin-top: 165px;
        font-size: 5em;
        color: #aaa;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    & h3 {
        padding-left: 10px;
        font-size: 1em;
    }
`

export const Photo = styled.div`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-image: url(${({ photo }) => (photo)});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`