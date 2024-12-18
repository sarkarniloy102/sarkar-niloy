import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './Utilities/Theme'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
// import Experience from "./Components/Experience";
import Education from "./Components/Education";
import ProjectDetails from "./Components/ProjectDetails";
import Footer from "./Components/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <title>Sarkar Niloy</title>
      
      <Router >

        <Navbar></Navbar>
        <Body>
          <HeroSection></HeroSection>
          <Wrapper>
            <Skills></Skills>
            {/* <Experience></Experience> */}
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal}></Projects>
          <Wrapper>
            <Education></Education>
            <Contact></Contact>
          </Wrapper>
          <Footer></Footer>
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal}></ProjectDetails>
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;