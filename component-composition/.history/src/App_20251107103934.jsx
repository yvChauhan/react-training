import { useState } from "react";
import Header from "./components/Header.jsx";
import Instruction from "./components/Instruction.jsx";
import Footer from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";
import Section from "./components/Section.jsx";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev)=>!prev);
  };

  return (
    <div className="app">
      <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions}/>
      <Instruction showInstructions={showInstructions}/>
      <Main >
        <Section />
      </Main>
      <Footer />
    </div>
  )
}

export default App
