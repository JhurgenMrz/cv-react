import React from "react";
import H2Styled from "../../styled/H2Styled";
import Certificate from "./Certificate";
import styled from "styled-components";
import { Device } from "../../styled/Device";

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding-bottom: 20px;
  border-radius: 25px;
`;

const CertificatesConteiner = styled.div`
  width: auto;
  height: auto;
  display: flex;
  /* margin-left: 10px; */
  /* padding-left: 10px; */
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  /* overflow: hidden; */
  margin: 0;
  text-align: center;

  @media ${Device.mobileM}{
    width: 97%;
  }

  @media ${Device.laptop} {
    width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.3em;
    justify-items: center;
    margin-bottom: 5%;
    padding: 0;
  }

  @media ${Device.laptop} {
    padding: 40px;
    overflow-x: hidden;
  }
`;
const PCert = styled.p`
  font-family: "Lato", sans-serif;
  text-align: right;
  margin-right: 0;
  letter-spacing: 2px;
`;

const Certificates = ({ certificates }) => (
  <Container>
    <H2Styled name="CERTIFICATES / PROJECTS" />

    <CertificatesConteiner>
      {certificates.map((cert, index) => (
        <Certificate key={`cert-${index}`} index={index} cert={cert} />
      ))}
    </CertificatesConteiner>
  </Container>
);

export default Certificates;
