import React from "react";
import styled, { ThemeProvider } from "styled-components";

const SocialContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
  /* border: 2px solid blue; */
  height: 60px;
  padding: 0;
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SocialCircle = styled.div`
  background: white;
  /* margin:0 1em 0 0; */
  width: 45px;
  height: 45px;
  border-radius: 23%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 14px 5px rgba(176,176,176,1);
`;

const SocialAnchor = styled.a`
  color: white;
  text-decoration: none;
  font-size: 2.4em;
  
`;

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
    <SocialContainer>
    {props.social.map((item, index) => (
      <SocialCircle key={`Social-${index}`}>
        <SocialAnchor href={item.url} target="_blank">
          <ThemeProvider theme={getColor(item.name)}>
            <SocialIcon className={`fa fa-${item.name}`} />
          </ThemeProvider>
        </SocialAnchor>
      </SocialCircle>
    ))}
  </SocialContainer>
  )

}

export default Social;
