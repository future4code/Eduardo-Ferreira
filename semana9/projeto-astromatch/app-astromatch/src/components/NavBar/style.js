import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    align-items: center;
    padding: 12px 0;
    background: #380480;
    border-bottom: 1px solid #120129;
    border-radius: 5px 5px 0 0;
    & h3 {
        font-size: 1.3em;
        color: #fff;
        position: absolute;
        & b {
            color: #FE3221;
        }
    }
    & span {
        cursor: pointer;
        font-size: 2.2em;
        padding-right: 20px; ;
        margin-left: auto;
        background: rgb(255,136,0);
        background: linear-gradient(180deg, rgba(255,136,0,1) 0%, rgba(255,0,0,1) 35%, rgba(136,0,0,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
