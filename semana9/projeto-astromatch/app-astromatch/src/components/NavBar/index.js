import React from 'react'
import { NavBarContainer } from "./style"
export const NavBar = (props) => {
    return (
        <>
            <NavBarContainer>
                <h3>astromatch</h3>
                <span onClick={() => props.menu('Matchs')}>V</span>
            </NavBarContainer>
        </>
    )
}

export default NavBar
