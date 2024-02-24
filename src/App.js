import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar";
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { useState, useEffect } from "react";
import HeroSection from './components/HeroSection/index.js';
import Skills from './components/Skills/index.js';
import Experience from  './components/Experience/index.js'
import Projects from './components/Projects/index.js';
import Education from "./components/Education";
import Footer from './components/Footer/index.js';
import Contact from './components/Contact/index.js';
import ProjectDetails from "./components/ProjectDetails";



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
  const [darkMode, setDarkMode] = useState(false);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <Skills/>
          <Experience/>
          
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>

      </Router>
    </ThemeProvider>
  );
}

export default App;
