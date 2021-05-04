import React, { useContext, useEffect, useState } from 'react'
import { Animation, HeaderContainer } from './style'
import { MatchsContext } from "../../store/index"
import { GetProfileToChoose } from "../../services/api";
import { Spinner, Buttons } from "../../styles/styles";
import PersonCard from "../../components/PersonCard/index"

import {ClearApi} from "../../services/api";

ClearApi().then((res) => {
    console.log(res);
})   
 
const Home = () => {
    const [animation, setAnimation] = useState({});
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState([]);
    const [matchs, setMatchs, addMatch] = useContext(MatchsContext);
    
    useEffect(() => {
        GetProfileToChoose().then((res) => {
            setProfile(res.data.profile);
            setLoading(false);
            setAnimation({
                opacity: '1',
                left: '0',
                transition: ' all 0.4s ease',
            });
        });
    }, [matchs])

    const handleAnimation = (booelan) => {
        if (booelan === false) {
            setAnimation({
                transform: 'rotate(-26deg)',
                opacity: '0',
                left: '-150px',
                transition: 'all 0.2s ease',
            });
        } else {
            setAnimation({
                transform: 'rotate(26deg)',
                opacity: '0',
                left: '150px',
                transition: 'all 0.2s ease',
            });
        }
        handleProfiles(booelan);
    }

    const handleProfiles = (boolean, id) => {
        setLoading(true);
        const body = {
            "id": profile.id,
            "choice": boolean
        }
        addMatch(body);
    }

    const openMatchs = () => {
        console.log("Abrir")
    }

    return (
        <>
            {loading && <Spinner load={loading} />}
            <Animation animationDirection={animation}>
                <PersonCard profile={profile} />
            </Animation>
            <Buttons>
                <button className="material-icons" onClick={() => handleAnimation(false)}>sentiment_very_dissatisfied</button>
                <button className="material-icons" onClick={() => handleAnimation(true)}>sentiment_very_satisfied</button>
            </Buttons>
        </>
    )
}

export default Home
