import NavLinksRight from "./NavLinksRight";
import "./Nav.css";
const Navigation = (props) => {
  return (
    <div className="Navigation">
      <NavLinksRight token={props.token} />
    </div>
  );
};
export default Navigation;
