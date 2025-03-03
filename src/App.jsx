import styled from "styled-components";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects.Jsx";

const Div = styled.div`
  overflow-x: hidden;
`


const App = () => {
  return(
    <Div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Experience/>
      <Contact/>
    </Div>
  )
}

export default App