import React, {useContext, useState} from 'react'
import * as c from './style'
import { MatchsContext } from "../../store/index"

const PersonCard = (props) => {
    const profile = props.profile;
    return (
        <>
            <c.MainContainer>
                <c.MainContent photo={profile.photo}>
                    <c.NameAgeDesc>
                        <c.NameAge>
                            <h4>{profile.name},</h4>
                            <span>{profile.age}</span>
                        </c.NameAge>
                        <c.Description>{profile.bio}</c.Description>
                    </c.NameAgeDesc>
                </c.MainContent>
            </c.MainContainer>
        </>
    )
}

export default PersonCard
