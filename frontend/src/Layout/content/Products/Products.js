import react, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Products.css";
import { Link } from "react-router-dom";

function Products(props) {
  const [itemss, setitems] = useState([]);
  const [ItemLoading, setItemLoading] = useState(false);
  const url = props.match.params.name;

  useEffect(() => {
    try {
      const sendRequest = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}Products/${url}`
        );

        const responseData = await response.json();
        setitems(responseData.items);
        setItemLoading(true);
      };
      sendRequest();
    } catch (err) {}
  }, [url]);

  if (ItemLoading) {
    return (
      <react.Fragment>
        <div className="Products">
          {itemss.map((m) => (
            <ul key={m._id}>
              <Link
                className="text-link"
                to={{
                  pathname: "/ProductSelection/" + m._id,
                  state: { prod: m },
                }}
                params={m}
              >
                <li>
                  <img
                    src={process.env.REACT_APP_BACKEND_URL + `${m.picture}`}
                    alt="logo"
                    style={{ width: "150px", height: "150px" }}
                  />
                </li>
                <li>{m.name}</li>
                <li>
                  <del>ILS {m.Previous_price}</del>
                </li>
                <li>ILS {m.praic}</li>
              </Link>
            </ul>
          ))}
        </div>
      </react.Fragment>
    );
  } else return null;
}

const Itemproducts = (state) => {
  return {
    items: state.item,
    itemsEngland: state.England,
    itemsSpain: state.Spain,
  };
};

export default connect(Itemproducts, null)(Products);
