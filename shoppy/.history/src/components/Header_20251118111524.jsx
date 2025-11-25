import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header>
      <h1>Shopper</h1>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <hr />
    </header>
  );
}

export default Header;
