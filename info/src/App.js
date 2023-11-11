import React from "react";
import Top from "./Components/Top.jsx";
import Home from "./Components/Pages/Home.jsx";
import Intro from './Components/Middle/Intro.jsx'
import Workexp from "./Components/Workexp/Workexp.jsx";
import Project from "./Components/Project/Project.jsx";
import Footer from "./Components/Footer/Footer.jsx";


function App() {
  return (
    <>
      <Top />
      <Home />
      <Intro />
      <Workexp />
      <Project />
      <Footer />
    </>
  );
}

export default App;
