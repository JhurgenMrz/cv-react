import React from "react";
import Social from "./Social";
import styled from "styled-components";

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  /* border: 2px solid blue; */
  width: 600px;
  margin-top: 2em;
  justify-content: center;
`;

const AboutImg = styled.img`
  border-radius: 100%;
  width: 230px;
  height: 230px;
  border: 2px solid white;
  margin: auto;
  display: block;
  box-shadow: 0px 0px 40px 5px rgba(255, 255, 255, 0.75);
  object-fit: cover;
`;

const Presentation = styled.div`
  margin-left: 0.5em;
  width: 600px;
`;

const AboutH2 = styled.h2`
  font-family: "Fjalla One", sans-serif;
  font-weight: normal;
  font-size: 300%;
  letter-spacing: 4px;
  margin: 0 0 0.5em 0;
  color: white;
  text-align: left;
  line-height: 133%;
`;

const H2Strong = styled.strong`
  color: #2b3595;
`;

const ProfessionContainer = styled.div`
height: 30px;

  width: 50%;
  margin:0 25% 0 25%;
  background-color:white;
  box-shadow: 0px 0px 14px 5px rgba(176,176,176,1);
`;

const AboutProfession = styled.p`
  font-family: "Fjalla One", sans-serif;
  letter-spacing: 3px;
  font-weight: 400;
  color: #2b3595;
  font-size: 150%;
  padding: 0;
  margin: 0;
`;

const LocationContainer= styled.div`
height: 20px;
width: 40%;
padding:0;
  margin:0 30% 0 30%;
  background-color:white;
  box-shadow: 0px 0px 14px 5px rgba(176,176,176,1);
`;

const AboutLocation = styled.p`
  color: #2b3595;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 0;
  /* margin: 0.5em 0; */
`;
const EffectWhite = styled.div`
  margin-top: 1.5em;
  background: white;
  width: 100%;
  height: 10px;
`;

const AbountContainer = styled.div`
  width: 1024px;
  height: 440px;
  display: flex;
  margin: 0;
  padding: 0;
  /* background: url(https://i.postimg.cc/yYhs9KR8/fabian-grohs-597395-unsplash.jpg); */
  background: url(https://i.postimg.cc/8c9jWcSX/rich-tervet-662093-unsplash.jpg);
  background-size: 100%;
  background-position: center center;
`;

const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    <AbountContainer>
      <Presentation>
        <AboutH2>
          HELLO! I'M JHURGEN
          <br /> PASSIONATE ABOUT <H2Strong> TECHNOLOGY</H2Strong> AND <br />{" "}
          <H2Strong>DESIGN</H2Strong> <br /> <br /> <br />
          <H2Strong> #NeverStopLearning</H2Strong>
        </AboutH2>
      </Presentation>

      <AboutAvatar>
        <figure>
          <AboutImg src="https://i.postimg.cc/cJRYDY0Y/Me.jpg" alt={name} />
        </figure>
        <ProfessionContainer>
          <AboutProfession>{profession}</AboutProfession>
        </ProfessionContainer>
        <LocationContainer>
        <AboutLocation>{address}</AboutLocation>
        </LocationContainer>

        <Social social={social} />
      </AboutAvatar>

      <div className="About-location" />
    </AbountContainer>
  </AboutStyle>
);

export default About;
