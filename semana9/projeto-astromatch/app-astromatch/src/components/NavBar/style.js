import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #bbb;
    & h3 {
        position: absolute;
    }
    & span {
        padding-right: 20px; ;
        margin-left: auto;
    }
`
