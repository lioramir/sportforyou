import react, { useEffect, useState } from "react";
import "./Sidebar.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../component/spinner/Spinner.js";

function Sidebar(props) {
  const [CategoryItem, setCategoryItem] = useState();
  const [CategoryLoading, setCategoryLoading] = useState(false);

  useEffect(() => {
    try {
      const sendRequest = async () => {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL);

        const responseData = await response.json();
        setCategoryItem(responseData.uniquecategorys.map((m) => ({ name: m })));
        setCategoryLoading(true);
      };
      sendRequest();
    } catch (err) {}
  }, []);

  if (CategoryLoading) {
    return (
      <react.Fragment>
        <div className="Sidebar">
          <ul>
            <li>תפריט</li>

            <hr></hr>
            {CategoryItem.map((m) => (
              <Link to={"/Products/" + m.name} key={m.name}>
                <div className="container_list_item">
                  <li>{m.name}</li>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </react.Fragment>
    );
  } else return <Spinner />;
}

const getItemSide = (dispatch) => {
  return {
    getItem: () => dispatch({ type: "Category" }),
  };
};

const ItemSidebar = (state) => {
  return {
    items: state.item,
  };
};

export default connect(ItemSidebar, getItemSide)(Sidebar);
