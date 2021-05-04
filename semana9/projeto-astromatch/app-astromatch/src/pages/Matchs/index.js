import React, { useContext, useEffect, useState } from 'react'
import { GetMatches } from '../../services/api'
import { Container, Photo, Content } from "./style"
import { MatchsContext } from "../../store/index"
import { Spinner } from "../../styles/styles";

export const Matchs = () => {
    const [matchs, setMatchs, addMatch, getMatches, setMatches] = useContext(MatchsContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        GetMatches().then((res) => {
            setLoading(false);
            setMatches(res.data.matches);
        })
    }, [])

    return (
        <Container>
            {loading && <Spinner load={loading} />}
            {getMatches.length === 0
            ?
                <p className="material-icons">no_accounts</p>
            :
                getMatches.map((profile) => {
                    return (
                        <Content key={profile.id}>
                            <Photo photo={profile.photo}>
                            </Photo>
                            <h3>{profile.name}</h3>
                        </Content>
                    )
                })
            }
        </Container>
    )
}
