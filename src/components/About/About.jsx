import React from "react";
import Social from "../Social/Social";
import styled from "styled-components";
import "./About.css";
import { fadeIn } from "../../styled/animation";

const AbountWrapper = styled.div`
  ${fadeIn()}
`;

const About = ({ name, profession, address, social }) => (
  <AbountWrapper className="AbountContainer">
    <div className="Presentation">
      <h2>
        HELLO! I'M JHURGEN
        <br /> PASSIONATE ABOUT <strong> TECHNOLOGY</strong> AND <br />{" "}
        <strong>DESIGN</strong> <br /> <br /> <br />
        <strong> #NeverStopLearning</strong>
      </h2>
    </div>
    <div className="PresentationResponsive">
      <h2>
        HELLO! I'M JHURGEN
        <br />
        PASSIONATE ABOUT <strong> TECHNOLOGY</strong>
        <br /> AND <strong>DESIGN</strong>
      </h2>
    </div>

    <div className="About-Avatar">
      <figure>
        <img src="https://i.postimg.cc/cJRYDY0Y/Me.jpg" alt={name} />
      </figure>
      <div className="ProfessionContainer">
        <p>{profession}</p>
      </div>
      <div className="LocationContainer">
        <p>{address}</p>
      </div>
      {/* {console.log(`Object Social: ${social}`)} */}

      <Social social={social} />
    </div>
  </AbountWrapper>
);

export default About;
