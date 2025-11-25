import { useState } from "react";
import Header from "./components/Header.jsx";
import Instruction from "./components/Instruction.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    console.log(showInstructions);
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

export function Section() {
  return (
    <section className="app-section"></section>
  );
}



export default App
