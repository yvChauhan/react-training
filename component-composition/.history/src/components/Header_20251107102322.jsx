export default function Header({showInstructions, toggleInstruction}) {
  return (
    <header className="app-header">
        <h1>UI Component Showcase</h1>
        <p>Explore the various UI components available in this application.</p>
        <div className="header-buttons">
            <button className="accordion-button" onClick={toggleInstruction}>{showInstructions ? "Hide Instructions" : "Show Instructions"}</button>
            <button>Test 2</button>
        </div>
    </header>
  );
}