import React from "react";

function App() {
  return (
    <>
    <Header />
    {/* <ReactHeader /> */}
    <Main />
    <Footer />
    </>
  )
}

const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];


export function Header() {
  const hour = 22;
  const openHour = 9;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour < closeHour; 

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
      {isOpen ? 
        (<p className="open">
          We are open until {closeHour}:00. Come visit us!
          </p> ): 
       ( <p className="closed">
          Sorry, we are closed now. Our working hours are from {openHour}:00 to {closeHour}:00.
        </p>)}
    </header>
  );
}

// React behind the scenes converts this JSX code into React.createElement calls
// export function ReactHeader() {
//   return React.createElement(
//     'header',
//     null,
//     React.createElement('h1', null, 'Gadget Store'),
//     React.createElement('nav', null,
//       React.createElement('ul', null,
//         React.createElement('li', null, 'Home', React.createElement('a', { href: '#home' })),
//       ),
//       React.createElement('ul', null,
//         React.createElement('li', null, 'Gadgets', React.createElement('a', { href: '#gadgets' })),
//       ),
//       React.createElement('ul', null,
//         React.createElement('li', null, 'About Us', React.createElement('a', { href: '#about' })),
//       ),
//       React.createElement('ul', null,
//         React.createElement('li', null, 'Contact Us', React.createElement('a', { href: '#contact' })),
//       ),
//     ));
// }

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
    <img className="product-image" src={props.photoName} alt={props.name} />
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
