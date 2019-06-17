import React from 'react'
import Skills from '../components/Skills'
import styled from 'styled-components'
import H2Styled from '../styled/H2Styled'
import PStyled from '../styled/PStyled'

const DetailsContainer = styled.div`
/* background-color:#f6f6f6; */
background-color:#fff;
display: grid;
grid-template-columns: 55% 45%;



@media (max-width:426px){
/* width:100%; */
/* border:2px solid yellow; */
grid-template-columns: 1fr;
/* grid-template-rows: 2; */
/* border:2px solid blue */

   
}

`;

const PresentationContainer = styled.div`
   /* border:2px solid blue; */
   width:100%;
   @media (max-width:426px) {
      margin-left:.5em;
   }
`;


const Details = ({skills,bio}) =>{
 return (
     <DetailsContainer>
         <PresentationContainer>
         <H2Styled name ="EXPERIENCE / KNOWLEDGE"/>
            <PStyled name={bio}/>
         </PresentationContainer>
         <div>
            <Skills data={skills}/>
         </div>
     </DetailsContainer>
 )   
}

export default Details;