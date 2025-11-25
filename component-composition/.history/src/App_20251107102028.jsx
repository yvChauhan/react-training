import Header from "./components/Header.jsx";
import Instruction from "./components/Instruction.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Instruction />
      <Main>
        <Section />
      </Main>
      <Footer />
    </div>
  )
}

export function Instruction() {
  return (
    <div className="app-instruction"></div>
  );
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
