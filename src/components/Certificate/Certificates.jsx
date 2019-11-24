import React from "react";
import H2Styled from "../../styled/H2Styled";
import H3Styled from "../../styled/H3Styled";
import PStyled from "../../styled/PStyled";
import Certificate from "./Certificate";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { device } from "../../styled/Device";

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const CertificatesConteiner = styled.div`
  width: 97%;
  height: auto;
  display: flex;
  /* margin-left: 10px; */
  padding-left: 10px;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  /* overflow: hidden; */
  margin: 0;
  text-align: center;

  @media ${device.laptop} {
    width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.3em;
    justify-items: center;
    margin-bottom: 5%;
    padding: 0;
  }
  
  @media ${device.laptop}{
    padding: 40px;
  }
`;
const PCert = styled.p`
  font-family: "Lato", sans-serif;
  text-align: right;
  margin-right: 0;
  letter-spacing: 2px;
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  justify-items: flex-end;
  justify-items: right;
  align-content: center;
  align-items: center;
  margin-right: 1%;
`;

const Certificates = ({ certificates }) => (
  <Container>
    <H2Styled name="CERTIFICATES / PROJECTS" />

    <CertificatesConteiner>
      {certificates.map((cert, index) => (
        <Certificate key={`cert-${index}`} index={index} cert={cert} />
      ))}
    </CertificatesConteiner>
    <FooterDiv>
      <PCert>This page was made with REACT </PCert> <FaReact />
    </FooterDiv>
  </Container>
);

export default Certificates;
