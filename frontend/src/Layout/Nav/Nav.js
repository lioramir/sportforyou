import logo from "./logo.png";
import react from "react";
import "./Nav.css";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

//import { GrCart } from "react-icons/gr";
import { BiCart } from "react-icons/bi";

import { useSpring, animated } from "react-spring";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Nav(props) {
  const [propss, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const fade = useSpring({
    from: {
      opacity: 0,
      marginTop: -500,
    },
    to: {
      opacity: 1,
      marginTop: 0,
    },
  });

  return (
    <react.Fragment>
      <animated.div className="nav" style={fade}>
        <NavLink to="/">
          {" "}
          <animated.img
            src={logo}
            className="logo"
            alt="logo"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: propss.xys.interpolate(trans) }}
          />
        </NavLink>
        <div className="navRight">
          <Navigation token={props.token} />
          <MobileNavigation token={props.token} />
        </div>
        <ul className="navLeft">
          <li>
            <NavLink to="/Cart">
              <BiCart size="2em" color="cornflowerblue" />
            </NavLink>
            <span className="numberCircle">{props.countCart}</span>
          </li>
        </ul>
        {console.log(props.token)}
      </animated.div>
    </react.Fragment>
  );
}

const st = (state) => {
  return {
    countCart: state.countCart,
    token: state.token,
  };
};

export default connect(st)(Nav);
