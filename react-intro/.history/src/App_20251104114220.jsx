function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export function Header() {
  return (
    <header className="header">
      <h1>Gadget Store</h1>
      <nav className="nav">
        <ul>
          <li>Home <a href="#home"></a></li>
        </ul>
        <ul>
          <li>Gadgets</li>
          <a href="#gadgets"></a>
        </ul>
        <ul>
          <li>About Us</li>
          <a href="#about"></a>
        </ul>
        <ul>
          <li>Contact Us</li>
          <a href="#contact"></a>
        </ul>
      </nav>
    </header>
  );
}

export function Main() {
  return (
    <main>
      <h2>Main Content</h2>
    </main>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <h3>Footer</h3>
    </footer>
  );
}

export default App
