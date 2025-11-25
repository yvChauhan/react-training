function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

const productData = [
  {
    name: 'Laptop Pro',
    description: 'A high-end laptop for professionals.',
    price: 1999.99,
    imageUrl: '/laptop.png',
    soldOut: false,
  },
];


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
    <main className="catalog">
      <ul className="products">
        {productData.map((product, index) => ()}
      </ul>
    </main>
  );
}

export function Product() {
  return (<li className="product">Product 1</li>);
}

export function Footer() {
  return (
    <footer className="footer">
      <h3>Footer</h3>
    </footer>
  );
}

export default App
