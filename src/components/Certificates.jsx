import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import Certificate from '../components/Certificate'
import styled from 'styled-components'

const CertificatesConteiner = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-row-gap:2.3em;
    justify-items: center;
    text-align:center;
`;



const Certificates = props =>(
    <div>
        <H2Styled name="CERTIFICATES / PROJECTS"/>

        <CertificatesConteiner>

            {props.certificate.map((cert,index)=>(

            <Certificate index={index}  cert={cert} >

            </Certificate>

            ))
            }
        </CertificatesConteiner>
    </div>
)

export default Certificates;