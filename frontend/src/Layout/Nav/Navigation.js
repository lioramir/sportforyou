import NavLinksRight from "./NavLinksRight";
import "./Nav.css";
const Navigation = (props) => {
  return (
    <navi className="Navigation">
      <NavLinksRight token={props.token} />
    </navi>
  );
};
export default Navigation;
