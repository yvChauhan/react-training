import { useState } from "react";
import Header from "./components/Header.jsx";
import Instruction from "./components/Instruction.jsx";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev)=>!prev);
  };

  return (
    <div className="app">
      <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions}/>
      <Instruction showInstructions={showInstructions}/>
      <Main>
        <Section />
      </Main>
      <Footer />
    </div>
  )
}

export function Main({ children }) {
  return (
    <main className="app-main">
      {children}
    </main>
  );
}

export function Section() {
  return (
    <section className="app-section"></section>
  );
}

export function Footer() {
  return (
    <footer className="app-footer"></footer>
  );
}

export default App
