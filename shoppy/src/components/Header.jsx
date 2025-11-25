import { Link, NavLink } from "react-router";
import NavLinkMenu from "../UI/NavLinkMenu";

function Header() {
  return (
    <header className="flex justify-between px-5 py-8 bg-blue-200 shadow-md">
      <img className="h-6" src="/vite.svg" alt="Logo" />

      <nav>
        <ul className="flex gap-14">
          <li>
            <NavLinkMenu to={"/"}>Home</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu to={"/about"}>About</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu to={"/cart"}>Cart</NavLinkMenu>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
