import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Main from "../components/Main/Main";
import Details from "../components/Details/Details";
import Certificates from "../components/Certificate/Certificates";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import { Loader } from "../components/Loader/Loader";
// import useGetData from "../hooks/useGetData";
import data from "../api.json";

const GlobalSyle = createGlobalStyle`
    body{
        font-family: 'Muli', sans-serif;
        margin:0 ;
        padding:0;
        box-sizing: border-box;
        background: rgb(84,228,255);
        background: -moz-linear-gradient(0deg, rgba(84,228,255,1) 0%, rgba(101,199,247,1) 30%, rgba(0,82,212,1) 100%);
        background: -webkit-linear-gradient(0deg, rgba(84,228,255,1) 0%, rgba(101,199,247,1) 30%, rgba(0,82,212,1) 100%);
        background: linear-gradient(0deg, rgba(84,228,255,1) 0%, rgba(101,199,247,1) 30%, rgba(0,82,212,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#54e4ff",endColorstr="#0052d4",GradientType=1);
        min-height: 100vh;
    }
`;

const App = () => {
  const [Show, setShow] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setShow(true)
    }, 1000);
  }, [])


  return <Main>
      <GlobalSyle />
      {Show ? (
        <>

          <About
            avatar={data.avatar}
            profession={data.profession}
            address={data.address}
            social={data.social}
          />

          <Details skills={data.skills} bio={data.bio} />

          <Projects projects={data.projects} />

          <Certificates certificates={data.certificate} />
          <Footer />


        </>
      ) : <Loader />
    
    }
    </Main>
};

export default App;
