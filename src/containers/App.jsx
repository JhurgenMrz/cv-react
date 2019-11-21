import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "../components/Main/Main";
import Details from '../components/Details/Details'
import Certificates from '../components/Certificate/Certificates'
import Projects from '../components/Projects/Projects'
import About from "../components/About/About";
// import useGetData from "../hooks/useGetData";
import data from "../api.json";

const GlobalSyle = createGlobalStyle`
    body{
        font-family: 'Muli', sans-serif;
        margin:0 ;
        padding:0;
        background: rgb(176,102,254);
        background: linear-gradient(45deg, #4F00BC 0%, #29ABE2 100%);
    }
`;

const App = () => {
  // const data = useGetData();
  // const data =
  // console.log(`Jhurgen ${data}`);

  return data.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <Main>
      <GlobalSyle />

      
      <About
          avatar={data.avatar}
          profession={data.profession}
          address={data.address}
          social={data.social}
      />
      
      <Details skills={data.skills} bio={data.bio} />

      <Projects projects={data.projects} />

      <Certificates certificates={data.certificate} />
    </Main>
  );
};

export default App;
