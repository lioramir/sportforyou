import { NavLink } from "react-router-dom";

const NavLinksRight = (props) => {
  return (
    <ul className="navRight">
      <li>
        <NavLink to="/Contact_Us" activeClassName="nav-active">
          צור קשר
        </NavLink>
      </li>
      <li>
        <NavLink to="/About_us" activeClassName="nav-active">
          אודותינו
        </NavLink>
      </li>
      <li>
        <NavLink to="/Terms_of_Use" activeClassName="nav-active">
          תנאי שימוש
        </NavLink>
      </li>
      {props.token ? (
        <li>
          <NavLink to="/Admin" activeClassName="nav-active">
            מנהל
          </NavLink>
        </li>
      ) : null}
    </ul>
  );
};

export default NavLinksRight;
