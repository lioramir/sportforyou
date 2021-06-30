import NavLinksRight from "./NavLinksRight";
import "./Nav.css";
import { VscMenu } from "react-icons/vsc";
import { useState } from "react";
const MobileNavigation = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <navi className="MobileNavigation">
      <VscMenu
        className="Hamburger"
        size="40px"
        color="white"
        onClick={() => setOpen(!open)}
      />
      {open && <NavLinksRight token={props.token} />}
    </navi>
  );
};
export default MobileNavigation;
