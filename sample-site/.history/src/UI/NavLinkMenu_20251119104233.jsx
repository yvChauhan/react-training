import { NavLink } from "react-router-dom";

export default function NavLinkMenu({ to, children }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-gray-900 font-semibold" : ""
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
