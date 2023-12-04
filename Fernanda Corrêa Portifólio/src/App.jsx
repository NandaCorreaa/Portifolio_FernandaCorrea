import React from "react";
import Header from "./components/Header.jsx";
import SectionInicio from "./components/SectionInicio.jsx";
import SectionSobre from "./components/SectionSobre.jsx";
import SectionProjetos from "./components/SectionProjetos.jsx";


function App(){
  return(
    <>
      <Header/>
      <SectionInicio/>
      <SectionSobre/>
      <SectionProjetos/>
    </>
  )
}

export default App