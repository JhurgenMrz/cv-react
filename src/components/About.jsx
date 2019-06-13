import React from "react";
import Social from "./Social";
import styled from "styled-components";

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 2px solid #e91e63;
  margin: auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  object-fit: cover;
`;

const AboutName = styled.div`
  text-align: center;
`;

const AboutH2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 0.5em 0 0 0;
  color: #c2185b;
`;

const AboutProfession = styled.p`
  margin: 0.2em 0 1em 0;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #c2185b;
`;

const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
  letter-spacing:.6px;
`;
const AboutLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 400;
`;

const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImg src="https://i.postimg.cc/cJRYDY0Y/Me.jpg" alt={name} />
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>{name}</AboutH2>
      </AboutName>
      <div className="About-profession">
        <AboutProfession>{profession}</AboutProfession>
      </div>
      <div className="About-desc">
        <AboutBio>{bio}</AboutBio>
      </div>
      <div className="About-location">
        <AboutLocation>{address}</AboutLocation>
      </div>
      <div className="About-social">
        <Social social={social} />
      </div>
    </div>
  </AboutStyle>
);

export default About;
