import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Info from "../components/Info";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
// import useGetData from "../hooks/useGetData";
import data from "../api.json";

const GlobalSyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin:0 ;
        padding:0;
        background: white;
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
      <Info>
        <Education data={data.education} />
        <Experience data={data.experience} />
        <Certificates data={data.certificate} />
        <Skills data={data.skills} />
      </Info>
    </Main>
  );
};

export default App;
