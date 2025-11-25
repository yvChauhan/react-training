import { Link } from "react-router";

function Header() {
  return (
    <header>
      <h1>Shopper</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/cart"}>Cart</Link>
      <hr />
    </header>
  );
}

export default Header;
