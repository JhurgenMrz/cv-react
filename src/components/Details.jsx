import React from 'react'
import Skills from '../components/Skills'
import styled from 'styled-components'
import H2Styled from '../styled/H2Styled'
import PStyled from '../styled/PStyled'

const DetailsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

`;


const Details = ({skills,bio}) =>{
 return (
     <DetailsContainer>
     <div>
        <H2Styled name ="EXPERIENCE / KNOWLEDGE"/>
        <PStyled name={bio}/>
     </div>
     <div>
        <Skills data={skills}/>
     </div>
     </DetailsContainer>
 )   
}

export default Details;