import React, { useState, createContext, useEffect } from "react";
import { ChoosePerson, GetMatches } from "../services/api";

export const MatchsContext = createContext();

export const MatchsProvider = ({ children }) => {
    
    const [matchs, setMatchs] = useState(true);
    const [getMatches, setMatches] = useState([]);

    const addMatch = (body) => {
        ChoosePerson(body).then((res) => {
            setMatchs(!matchs)
        })
    }

    return (
        <MatchsContext.Provider value={[matchs, setMatchs, addMatch, getMatches, setMatches]}>
            {children}
        </MatchsContext.Provider>
    )
}

