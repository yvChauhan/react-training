import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="flex justify-between px-5 py-8 bg-blue-200 shadow-md">
      <img className="h-6" src="/vite.svg" alt="Logo" />

      <nav>
        <ul className="flex gap-14">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
