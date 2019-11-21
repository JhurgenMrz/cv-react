import React from "react";
import H2Styled from "../../styled/H2Styled";
import H3Styled from "../../styled/H3Styled";
import PStyled from "../../styled/PStyled";
import Certificate from "./Certificate";
import styled from "styled-components";
// import icon from '../../public/icon.png'

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 100%;
`;

const CertificatesConteiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2.3em;
  justify-items: center;
  text-align: center;
  margin-bottom: 5%;
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
      <PCert>This page was made with REACT </PCert>{" "}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="react"
        witdh="10"
        height="30"
      />
    </FooterDiv>
  </Container>
);

export default Certificates;
