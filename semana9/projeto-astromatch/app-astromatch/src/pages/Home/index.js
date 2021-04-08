import React, { useContext, useEffect, useState } from 'react'
import * as c from './style'
import { MatchsContext } from "../../store/index"
import { GetProfileToChoose } from "../../services/api";

const Home = () => {
    const [profile, setProfile] = useState([]);
    const [matchs, setMatchs, addMatch] = useContext(MatchsContext);

    useEffect(() => {
        GetProfileToChoose().then((res) => {
            setProfile(res.data.profile);
        });
    }, [matchs])

    const handleProfiles = (boolean) => {
        const body = {
            "id": "71gMbZs2txS9LDvGK5Ew",
            "choice": boolean
        }
        addMatch(body);

    }

    return (
        <c.MainContainer>
            <c.MainContent photo={profile.photo}>
                <c.NameAgeDesc>
                    <c.NameAge>
                        <h4>{profile.name}</h4>
                        <span>{profile.age}</span>
                    </c.NameAge>
                    <c.Description>{profile.bio}</c.Description>
                </c.NameAgeDesc>
            </c.MainContent>
            <button onClick={() => handleProfiles(false)}>false</button>
            <button onClick={() => handleProfiles(true)}>true</button>
        </c.MainContainer>
    )
}

export default Home
