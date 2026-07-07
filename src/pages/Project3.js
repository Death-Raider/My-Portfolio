import styled from 'styled-components'
import React, {useEffect} from 'react'

import InfoSection from '../containers/InfoSection'
import {InfoDataProject3} from '../data/InfoData'

const Wrapper = styled.h1`
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem;
    font-size: xxx-large;
`;
const Project3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <InfoSection InfoData={InfoDataProject3} StyleFunc={()=>{}} ExtraFunc={()=>{
            return(
                <Wrapper>HiPO: Hierarchical Preference Optimization</Wrapper>
            )
        }} />
    )
}

export default Project3
