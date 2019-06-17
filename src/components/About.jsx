import React from "react";
import Social from "./Social";
import styled from "styled-components";

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  width: 100%;
  margin-top: 2em;
  justify-content: center;

  @media only screen and (max-width: 1023px){
    width:100%;
    /* border:2px solid blue; */
    margin-top: 1em;
    
  }


  @media only screen and (max-width: 768px){
      /* border: 2px solid blue; */
      margin-top: 0px;
      width:100%;
    }
  @media only screen and (max-width: 426px){
    width:425px;
    /* border:2px solid pink; */
  }
  @media only screen and (max-width: 376px){
    width:100%;
    /* border:2px solid pink; */
  }
`;

const AboutImg = styled.img`
  border-radius: 100%;
  width: 230px;
  height: 230px;
  border: 2px solid #2b3595;
  /* margin: auto; */
  /* display: block; */
  box-shadow: 0px 0px 40px 5px rgba(255, 255, 255, 0.75);
  object-fit: cover;

    @media screen and (max-width:768px){
      width:180px;
      height:180px;
    }

`;

const Presentation = styled.div`
  /* margin-left: 0.5em; */
  width: 100%;

  @media only screen and (max-width: 1023px){
  /* margin-left: 4em; */
        width:100%;
        height:100%;
        /* border:2px solid red; */
    }

  @media only screen and (max-width: 768px){
        width: 100%;
        /* border:2px solid yellow */
    }
  @media only screen and (max-width: 426px){
      /* width:100%; */
      /* border:2px solid red; */
      width:425px;

  }
  @media only screen and (max-width: 376px){
      width:375x;


  }
`;

const AboutH2 = styled.h2`
  font-family: "Fjalla One", sans-serif;
  font-weight: normal;
  font-size: 300%;
  letter-spacing: 4px;
  margin: 0 0 0.5em .5em;
  color: white;
  text-align: left;
  line-height: 133%;

  @media only screen and (max-width:1023px){
    margin: 0 0 0.5em 3em;
  }

  @media only screen and (max-width: 768px){
    margin: 0 0 0.5em .5em;
    font-size:250%;
    text-align:left;
    }

  @media only screen and (max-width: 426px){
    text-align:left;
    font-size:200%;
    margin-left:0;
    color: #f6f6f6;
  }
  @media only screen and (max-width: 376px){
    text-align:left;
    font-size:150%;
    margin-left:1.4em;
    color: #f6f6f6;
  }
`;

const H2Strong = styled.strong`
  color: #2b3595;

  @media (max-width: 426px){
    color:#448ef6;
  }
`;

const ProfessionContainer = styled.div`
height: 30px;
  width: 50%;
  margin:0 auto 0 auto;
  background-color:white;
  box-shadow: 0px 0px 14px 5px rgba(176,176,176,1);
  border-radius:2px;

  @media screen and (max-width:768px){
    width:70%;
    margin:0 auto 0 auto;
  }
`;

const AboutProfession = styled.p`
  font-family: "Fjalla One", sans-serif;
  /* letter-spacing: 3px; */
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
border-radius:2px;

@media screen and (max-width:1023px){
    margin: 0 auto 0 auto;
    width: 50%;
}

@media screen and (max-width:768px){
  width:70%;
}

`;

const AboutLocation = styled.p`
  color: #2b3595;
  font-size: 1em;
  font-weight: 400;
  /* letter-spacing: 1px; */
  padding: 0;
  /* margin: 0.5em 0; */
`;

const AbountContainer = styled.div`
  /* width: 1024px; */
  width: 100%;
  display: grid;
  height: 440px;
  grid-template-columns: repeat(2,1fr);
  margin: 0;
  padding: 0;
  /* background: url(https://i.postimg.cc/yYhs9KR8/fabian-grohs-597395-unsplash.jpg); */
  background: url(https://i.postimg.cc/8c9jWcSX/rich-tervet-662093-unsplash.jpg);
  background-size: 100%;
  background-position: center center;

  @media only screen and (max-width:1023px){
    width:100%;
    height: 100%;
    /* border:1px solid blue; */
    grid-template-columns: repeat(2,1fr);

  }

  @media screen and (max-width:768px){
    grid-template-columns: repeat(2,1fr);

  }
  @media screen and (max-width:426px){
    grid-template-columns: 1fr;
    height:700px;
    background: url(https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80) fixed;
    background-repeat:no-repeat;
    background-position:left bottom ;
    object-fit:cover;
    /* witdh:100%; */
    justify-content:center;
    justify-items:center;
  }

  @media screen and (max-width:376px){
    width:100%
  }

`;

const About = ({ name, profession, address, social }) => (
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
        {
        console.log(`Object Social: ${social}`)
        }
        <Social social={social} />
      </AboutAvatar>

      <div className="About-location" />
    </AbountContainer>
  </AboutStyle>
);

export default About;
