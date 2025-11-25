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
    id: '0012ghjasd',
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    id: '0023ghjasd',
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
  const hour = new Date().getHours();
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
          <Product productObj={product} key={index} />
        ))}
      </ul>
    </main>
  );
}

export function Product({productObj}) {
  const { name, description, price, photoName, soldOut } = productObj;
  return (<li className="product">
    <img className="product-image" src={photoName} alt={name} />
    <div className="product-details">
      <h2 className="product-name">{name}</h2>
      <p className="product-description">{description}</p>
      <span className="product-price">${price.toFixed(2)}</span>
      {soldOut && <span className="sold-out">Sold Out</span>}
    </div>
  </li>);
}

export function Footer() {
  const style = {
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };
  return (
    <footer style={style}>
      <h3>Footer</h3>
    </footer>
  );
}

export default App
