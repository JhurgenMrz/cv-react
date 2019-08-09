import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Details from '../components/Details'
import Portfolio from '../components/Portfolio'
import Projects from '../components/Projects'
import About from "../components/About";
// import useGetData from "../hooks/useGetData";
import data from "../api.json";

const GlobalSyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin:0 ;
        padding:0;
        /* background-color: #393e46; */
        background-color: #202020;
    }
`;

const App = () => {
  // const data = useGetData();
  // const data =
  console.log(`Jhurgen ${data}`);

  return data.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <Main>
      <GlobalSyle />

      <Sidebar>
        <About
          avatar={data.avatar}
          profession={data.profession}
          address={data.address}
          social={data.social}
        />
      </Sidebar>
      
      <Details skills={data.skills} bio={data.bio} />

      {/* <Projects projects={data.projects} /> */}

      {/* <Portfolio certificate={data.certificate} /> */}
    </Main>
  );
};

export default App;
