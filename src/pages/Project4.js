import styled from 'styled-components'
import React, {useEffect} from 'react'

import InfoSection from '../containers/InfoSection'
import {InfoDataProject4} from '../data/InfoData'

const Wrapper = styled.h1`
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem;
    font-size: xxx-large;
`;
const Project4 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <InfoSection InfoData={InfoDataProject4} StyleFunc={()=>{}} ExtraFunc={()=>{
            return(
                <Wrapper>Multi-Agent RL Collision Avoidance</Wrapper>
            )
        }} />
    )
}

export default Project4
