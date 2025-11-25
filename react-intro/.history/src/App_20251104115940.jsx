function App() {
  return (
    <>
    <Header />
    <ReactHeader />
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

// React behind the scenes converts this JSX code into React.createElement calls
export function ReactHeader() {
  return React.createElement(
    'header',
    null,
    React.createElement('h1', null, 'Gadget Store'),
    React.createElement('nav', null,
      React.createElement('ul', null,
        React.createElement('li', null, 'Home', React.createElement('a', { href: '#home' })),
      ),
      React.createElement('ul', null,
        React.createElement('li', null, 'Gadgets', React.createElement('a', { href: '#gadgets' })),
      ),
      React.createElement('ul', null,
        React.createElement('li', null, 'About Us', React.createElement('a', { href: '#about' })),
      ),
      React.createElement('ul', null,
        React.createElement('li', null, 'Contact Us', React.createElement('a', { href: '#contact' })),
      ),
    );
}

export function Main() {
  return (
    <main className="catalog">
      <ul className="products">
        {productData.map((product, index) => (
          <Product key={index} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl} soldOut={product.soldOut} />
        ))}
      </ul>
    </main>
  );
}

export function Product(props) {
  console.log(props);
  return (<li className="product">
    <img className="product-image" src={props.imageUrl} alt={props.name} />
    <div className="product-details">
      <h2 className="product-name">{props.name}</h2>
      <p className="product-description">{props.description}</p>
      <span className="product-price">${props.price.toFixed(2)}</span>
      {props.soldOut && <span className="sold-out">Sold Out</span>}
    </div>
  </li>);
}

export function Footer() {
  return (
    <footer className="footer">
      <h3>Footer</h3>
    </footer>
  );
}

export default App
