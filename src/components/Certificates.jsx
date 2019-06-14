import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import Certificate from '../components/Certificate'
import styled, {ThemeProvider} from 'styled-components'


const Container = styled.div`
    width:100%;
    background-color:white;
    height:100%;
`;

const CertificatesConteiner = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-row-gap:2.3em;
    justify-items: center;
    text-align:center;
    margin-bottom: 5%;
`;
const PCert = styled.p`
font-family:'Lato', sans-serif;
text-align:right;
margin-right:3%;
letter-spacing: 2px;
`;

const react = {
    color: "#3b5998"
  };

  const SocialIcon = styled.i`
  color: ${props => props.theme.color};
`;


const Certificates = props =>(
    <Container>
        <H2Styled name="CERTIFICATES / PROJECTS"/>

        <CertificatesConteiner>

            {props.certificate.map((cert,index)=>(

            <Certificate index={index}  cert={cert} >

            </Certificate>

            ))
            }
        </CertificatesConteiner>
        <PCert>This page was made with REACT  </PCert>
        <a href="google.com" target="_blank">
        <ThemeProvider theme={react}>
        <SocialIcon className={`fa fa-${react}`} />
        </ThemeProvider>
        </a>
    </Container>
)

export default Certificates;