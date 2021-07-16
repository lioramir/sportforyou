import react, { useEffect, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Nav from "./Nav/Nav";
//import Landing_page from "./content/Landing_page/Landing_page";
//import About_us from "./content/About_us/About_us";
//import Terms_of_Use from "./content/Terms_of_Use/Terms_of_Use";
//import Contact_Us from "./content/Contact_Us/Contact_Us";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Spinner from "./component/spinner/Spinner.js";
//import Products from "./content/Products/Products";
//import ProductSelection from "./content/ProductSelection/ProductSelection";
//import Cart from "./content/Cart/Cart";
//import Admin from "./content/Admin/Admin";
//import LoginAdmin from "./content/Admin/LoginAdmin";
import "./Layout.css";

const Landing_page = react.lazy(() =>
  import("./content/Landing_page/Landing_page")
);
const About_us = react.lazy(() => import("./content/About_us/About_us"));
const Terms_of_Use = react.lazy(() =>
  import("./content/Terms_of_Use/Terms_of_Use")
);
const Contact_Us = react.lazy(() => import("./content/Contact_Us/Contact_Us"));
const Products = react.lazy(() => import("./content/Products/Products"));
const ProductSelection = react.lazy(() =>
  import("./content/ProductSelection/ProductSelection")
);
const Cart = react.lazy(() => import("./content/Cart/Cart"));
const Admin = react.lazy(() => import("./content/Admin/Admin"));
const LoginAdmin = react.lazy(() => import("./content/Admin/LoginAdmin"));

function Layout(props) {
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("adminToken"))) {
      const storeData = JSON.parse(localStorage.getItem("adminToken"));
      if (storeData.token && new Date(storeData.expiration) > new Date())
        props.AdminnLogin(storeData.token);
    }
  }, [props]);

  return (
    <react.Fragment>
      <div className="Layout">
        <div className="Nav_s">
          <Nav />
        </div>
        <div className="Recommended_s">
          <Recommended />
        </div>
        <div className="Sidebar_s">
          <Sidebar />
        </div>
        <div className="content_s">
          <Suspense
            fallback={
              <div>
                <Spinner />
              </div>
            }
          >
            <Route path="/" exact component={Landing_page} />
            <Route path="/Terms_of_Use" exact component={Terms_of_Use} />
            <Route path="/About_us" exact component={About_us} />
            <Route path="/Contact_Us" exact component={Contact_Us} />
            <Route path="/Products/:name" exact component={Products} />
            <Route
              path="/ProductSelection/:id"
              exact
              component={ProductSelection}
            />
            <Route path="/Cart" exact component={Cart} />
            <Route path="/LoginAdmin" exact component={LoginAdmin} />
            <Route path="/Admin" exact component={Admin} />
          </Suspense>
        </div>
      </div>
    </react.Fragment>
  );
}

const AdminnLogin = (dispatch) => {
  return {
    AdminnLogin: (token) => dispatch({ type: "AdminLogin", token }),
  };
};

export default connect(null, AdminnLogin)(Layout);
