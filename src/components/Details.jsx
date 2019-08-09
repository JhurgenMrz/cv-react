import React from "react";
import Skills from "../components/Skills";
import H2Styled from "../styled/H2Styled";
import PStyled from "../styled/PStyled";
import "./Details.css";

const Details = ({ skills, bio }) => {
  return (
    <div className="Details-container">
      <h2>EXPERIENCE / KNOWLEDGE</h2>
      <div className="Details-presentation">
        <div className="Details-bio">
          <p>{bio}</p>
        </div>
        <div className="Details-skills">
          <Skills data={skills} />
        </div>
      </div>
    </div>
  );
};

export default Details;
