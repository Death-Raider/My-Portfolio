import styled from 'styled-components'
import React, {useEffect} from 'react'

import InfoSection from '../containers/InfoSection'
import {InfoDataProject5} from '../data/InfoData'

const Wrapper = styled.h1`
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem;
    font-size: xxx-large;
`;
const Project5 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <InfoSection InfoData={InfoDataProject5} StyleFunc={()=>{}} ExtraFunc={()=>{
            return(
                <Wrapper>Algorithmic Trading: MetaTrader5 Auto Trader</Wrapper>
            )
        }} />
    )
}

export default Project5
