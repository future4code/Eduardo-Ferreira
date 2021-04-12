import React from 'react'
import { NavBarContainer } from "./style"
export const NavBar = (props) => {
    return (
        <>
            <NavBarContainer>
                <h3>astro<b>match</b></h3>
                {props.page === 'home'
                    ?
                    <span className="material-icons" onClick={() => props.menu('Matchs')}>local_fire_department</span>
                    :
                    <span className="material-icons" onClick={() => props.menu('home')}>keyboard_return</span>
                    
                }
            </NavBarContainer>
        </>
    )
}

export default NavBar
