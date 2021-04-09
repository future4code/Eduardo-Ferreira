import React, { useEffect } from 'react'
import { GetMatches } from '../../services/api'

export const Matchs = () => {

    useEffect(() => {
        GetMatches().then((res)=> {
            console.log(res.data.matches);
        })
    }, [])

    return (
        <>
            Testando
        </>
    )
}
