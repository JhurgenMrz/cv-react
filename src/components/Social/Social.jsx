import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Social.css";

const DisplayIcon = name => {
  if (name === "facebook") return <FaFacebookF style={{ color: "#3b5998" }} />;
  if (name === "twitter") return <FaTwitter style={{ color: "#38a1f3" }} />;
  if (name === "linkedin") return <FaLinkedinIn style={{ color: "#0e76a8" }} />;
  if (name === "github") return <FaGithub style={{ color: "#333" }} />;
};

const getColor = name => {
  if (name == "facebook") return facebook;
  if (name == "twitter") return twitter;
  if (name == "linkedin") return linkedin;
  if (name == "github") return github;
};

const Social = props => {
  return props.social.length === 0 ? (
    <h5>Cargando...</h5>
  ) : (
    <div className="Social-container">
      {props.social.map((item, index) => (
        <div className="Social-circle" key={`Social-${index}`}>
          <a href={item.url} target="_blank">
            {DisplayIcon(item.name)}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Social;
