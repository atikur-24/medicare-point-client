import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "default")}>
      {children}
    </NavLink>
  );
};

export default ActiveLink;
