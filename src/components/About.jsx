import React from "react";
import Social from "./Social";
import styled from "styled-components";

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
/* border: 2px solid blue; */
width:600px;
margin-top:2em;
justify-content:center;
`;

const AboutImg = styled.img`
  border-radius: 100%;
  width: 230px;
  height: 230px;
  border: 2px solid white;
  margin: auto;
  display: block;
  box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.75);
  object-fit: cover;
`;


const Presentation = styled.div`
  margin-left: 0.5em;
  width:600px;
`;

const AboutH2 = styled.h2`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 2.8em;
  letter-spacing: 1px;
  margin: 0;
  color: white;
  text-align:left;
`;

const AboutProfession = styled.p`
  font-family: 'Lato';
  letter-spacing: 2px;
  font-weight: 400;
  color: white;
  font-size: 24px;
  padding: 0;
  margin:0;
`;

const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
  letter-spacing:.6px;
`;
const AboutLocation = styled.p`
  color: white;
  font-size: 1em;
  font-weight: 400;
  padding: 0;
  margin:0.5em 0;
`;
const EffectWhite = styled.div`
  margin-top:1.5em;
  background: white;
  width: 100%;
  height: 10px;
`;

const AbountContainer = styled.div`
  width:1024px;
  height: 440px;
  display:flex;
  border: 1px solid white;
  margin: 0;
  padding:0;
  background: url(https://i.postimg.cc/yYhs9KR8/fabian-grohs-597395-unsplash.jpg) no-repeat center fixed;

`;

const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    
    <AbountContainer>
      <Presentation>
        <AboutH2 >HELLO!  I'M JHURGEN<br/> PASSIONATE ABOUT TECHNOLOGY<br/> AND DESIGN<br/>#NuncaParesDeAprender <br/> #NeverStopLearning 
        </AboutH2>
      </Presentation>

       <AboutAvatar>
        <figure>
          <AboutImg src="https://i.postimg.cc/cJRYDY0Y/Me.jpg" alt={name} />
        </figure>
        <AboutProfession>{profession}</AboutProfession>
        <AboutLocation>{address}</AboutLocation>
      
        <Social social={social} />
      

      </AboutAvatar>
      
      <div className="About-location">
      </div>
      


    </AbountContainer>
  </AboutStyle>
);

export default About;
