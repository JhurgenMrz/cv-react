import React from 'react'
import Skills from '../components/Skills'



const Details = ({skills}) =>{
 return (


     <DetailsContainer>
        <Skills data={skills}/>
     </DetailsContainer>
 )   
}

export default Details;