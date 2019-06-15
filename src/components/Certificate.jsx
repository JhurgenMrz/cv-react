import React from 'react'
import styled from 'styled-components';
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const CertificateBox = styled.div`

    width:360px;
    height:260px;
    /* border: 2px solid blue; */
    position: relative;
    margin-top:1em;
    box-shadow: 0px 0px 13px 1px rgba(0,0,0,0.75);
`;

const CertificateImg = styled.img`
position:absolute;
left:0px;
z-index:1;
width:100%;
height:100%;

`;

const CertificateName= styled.div`
    
    border:3px solid #161F7D;
    background-color:white;
    position:absolute;
    z-index:2;
    width:80%;
    height:60px;
    left:10%;
    top:80%;
    border-radius: 7px;
`;

const Certificate = ({cert,index}) => (
    <CertificateBox key={`Cert-${index}`}>
                <CertificateImg src={cert.image}/>
                <CertificateName>
                    <H3Styled>{cert.name}  <br/>@{cert.institution}</H3Styled>
                </CertificateName>
    </CertificateBox>

)


export default Certificate;