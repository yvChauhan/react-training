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
    <header>
      <h1>Header</h1>
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
    <footer>
      <h3>Footer</h3>
    </footer>
  );
}

export default App
