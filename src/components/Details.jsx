import React from "react";
import Skills from "../components/Skills";
import "./Details.css";
import { FaReact, FaNodeJs, FaCss3, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb, DiIllustrator } from "react-icons/di";
import styled, { keyframes } from "styled-components";
import { swing } from "react-animations";

const AnimationF = styled.div`
  animation: 3s ${keyframes`${swing}`} alternate-reverse infinite;
`;
const AnimationS = styled.div`
  animation: 4s ${keyframes`${swing}`} alternate-reverse infinite;
  
`;
const AnimationT = styled.div`
  animation: 5s ${keyframes`${swing}`} alternate-reverse infinite;
 
`;
const AnimationFO = styled.div`
  animation: 3s ${keyframes`${swing}`} alternate-reverse infinite;
  
`;

const Details = ({ skills, bio }) => {
  return (
    <div className="Details-container">
      <h2>EXPERIENCE / KNOWLEDGE</h2>
      <div className="Details-presentation">
        <div className="Details-bio">
          <p>{bio}</p>
          <section className="Details-technologies">
            <AnimationF>
              <FaReact style={{ color: "#34bdeb" }} />
            </AnimationF>
            <AnimationS>
              <FaNodeJs style={{ color: "#34eb34" }} />
            </AnimationS>
            <AnimationT>
              <FaCss3 style={{ color: "#348feb" }} />
            </AnimationT>
            <AnimationFO>
              <FaHtml5 style={{ color: "#eb4f34" }} />
            </AnimationFO>
            <AnimationF>
              <IoLogoJavascript style={{ color: "#ebe534" }} />
            </AnimationF>
            <AnimationS>
              <DiMongodb style={{ color: "#34eb68" }} />
            </AnimationS>
            <AnimationT>
              <DiIllustrator style={{ color: "#eb7134" }} />
            </AnimationT>
          </section>
        </div>
        <div className="Details-skills">
          <Skills data={skills} />
        </div>
      </div>
    </div>
  );
};

export default Details;
