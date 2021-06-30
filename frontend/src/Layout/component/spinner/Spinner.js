import logo from "../../Nav/logo.png";
import react from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <react.Fragment>
      <div className="Spinner">
        <img src={logo} className="logo1" alt="logo" />
        <br />
      </div>
    </react.Fragment>
  );
};

export default Spinner;
