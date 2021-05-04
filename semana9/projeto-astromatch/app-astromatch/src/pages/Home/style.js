import styled, {keyframes} from "styled-components";

export const Animation = styled.div`
    position: relative;
    left: 0;
    ${({animationDirection}) => (animationDirection)};
`

export const MainContainer = styled.div`
    text-align: center;
    background-image: url("");
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