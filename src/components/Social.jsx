import React from "react";
import styled, { ThemeProvider } from "styled-components";
import './Social.css'

const SocialIcon = styled.i`
  color: ${props => props.theme.color};
`;

const facebook = {
  color: "#3b5998"
};
const twitter = {
  color: "#38a1f3"
};
const linkedin = {
  color: "#0e76a8"
};
const github = {
  color: "#333"
};

const getColor = name => {
  if (name == "facebook") return facebook;
  if (name == "twitter") return twitter;
  if (name == "linkedin") return linkedin;
  if (name == "github") return github;
};

const Social = props => {

  return props.social.length === 0 ?(
      <h5>Cargando...</h5>
  ) : (
    <div className="Social-container">
    {props.social.map((item, index) => (
      <div className="Social-circle" key={`Social-${index}`}>
        <a href={item.url} target="_blank">
          <ThemeProvider theme={getColor(item.name)}>
            <SocialIcon className={`fa fa-${item.name}`} />
          </ThemeProvider>
        </a>
      </div>
    ))}
  </div>
  )

}

export default Social;
