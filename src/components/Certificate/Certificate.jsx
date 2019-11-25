import React from "react";
import styled from "styled-components";
// import H3Styled from "../../styled/H3Styled";
import PStyled from "../../styled/PStyled";
import { Device } from "../../styled/Device";

const CertificateBox = styled.div`
  scroll-snap-align: center;
  margin: 20px 10px;
  flex-shrink: 0;
  box-shadow: none;
  position: relative;
  height: 250px;
  width: 320px;

  @media ${Device.mobileL} {
    width: 360px;
    height: 260px;
    /* border: 2px solid blue; */
    position: relative;
    margin-top: 1em;
    box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.75);
    box-sizing: border-box;
  }
`;

const CertificateImg = styled.img`
  position: absolute;
  left: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const CertificateName = styled.div`
  border: none;
  background: rgba(31, 162, 255, 1);
  color: white;
  border-radius: 20px;
  position: absolute;
  z-index: 2;
  width: 80%;
  height: 60px;
  left: 10%;
  top: 80%;

  p {
    margin: 10px 0;
  }

  @media ${Device.mobileL} {
    border: 3px solid #161f7d;
    background-color: white;

    border-radius: 7px;
    color: #000;

    p {
      font-size: 18px;
    }
  }
`;

const Certificate = ({ cert, index }) => (
  <CertificateBox key={`Cert-${index}`}>
    <CertificateImg src={cert.image} />
    <CertificateName>
      <p>
        {cert.name} <br /> @{cert.institution}
      </p>
    </CertificateName>
  </CertificateBox>
);

export default Certificate;
