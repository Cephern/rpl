import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav>
      <div className="link-wrapper">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
      </div>
      <div className="link-wrapper">
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
      </div>
      <div className="link-wrapper">
        <NavLink
          to="/account"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
