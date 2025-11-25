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

  const handleClick = () => {
    alert("Button clicked!");
  };
  
  return (
    <div className="app">
      <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions}/>
      <Instruction showInstructions={showInstructions}/>
      <Main >
        <Section title="Buttons Variants">
          <button className="button primary">Primary Button</button>
          <button className="button secondary">Secondary Button</button>
          <button className="button danger">Danger Button</button>
          <button className="button gradient">Gradient Button</button>
          <button className="button outline">Outline Button</button>
        </Section>
        <Section title="Button Sizes">
          <button className="button primary small">Small Button</button>
          <button className="button primary medium">Medium Button</button>
          <button className="button primary large">Large Button</button>
        </Section>
        <Section title="Button States">
          <button className="button primary small disabled">Disabled</button>
          <button className="button">default</button>
        </Section>
        <Section title="Button Full Width">
          <button className="button primary full-width">Full Width Button</button>
        </Section>
        <Section title="Button with Function">
          <button className="button primary" onClick={handleClick}>Full Width Button</button>
        </Section>
      </Main>
      <Footer />
    </div>
  )
}

export default App
