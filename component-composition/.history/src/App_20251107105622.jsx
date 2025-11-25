import { useState } from "react";
import Header from "./components/Header.jsx";
import Instruction from "./components/Instruction.jsx";
import Footer from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";
import Section from "./components/Section.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="app">
      <Header
        showInstructions={showInstructions}
        toggleInstructions={toggleInstructions}
      />
      <Instruction showInstructions={showInstructions} />
      <Main>
        <Section title="Buttons Variants">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="gradient">Gradient Button</Button>
          <Button variant="outline">Outline Button</Button>
        </Section>
        <Section title="Button Sizes">
          <Button variant="primary" size="small">
            Small Button
          </Button>
          <Button variant="primary" size="medium">
            Medium Button
          </Button>
          <Button variant="primary" size="large">
            Large Button
          </Button>
        </Section>
        <Section title="Button States">
          <Button variant="primary" size="small" isDisabled>
            Disabled
          </Button>
          <Button variant="primary">default</Button>
        </Section>
        <Section title="Button Full Width">
          <Button variant="primary" fullWidth>
            Full Width Button
          </Button>
        </Section>
        <Section title="Button with Function">
          <Button variant="primary" onClick={handleClick}>
            Full Width Button
          </Button>
        </Section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
