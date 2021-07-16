import react, { useState } from "react";
import { connect } from "react-redux";
import "./ProductSelection.css";
import PopupImgPolicy from "../../component/popup/PopupImgPolicy";

function ProductSelection(props) {
  const [isOpen, setisOpen] = useState(false);
  const [isOpepolicyn, setisOpenpolicy] = useState(false);
  const [state, setState] = useState({
    Measure: "S",
    Pants: "no",
    printing: "no",
  });

  const checkboxpolicyRef = react.createRef();

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function handleShowDialog() {
    setisOpen(!isOpen);
  }
  function handleShowDialogpolicy() {
    setisOpenpolicy(!isOpepolicyn);
  }
  const handleDel = async () => {
    const url = props.match.params.id;
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}ProductSelection/${url}`,
      { method: "DELETE" }
    );
    console.log(response);
    props.history.goBack();
  };

  function handleSubmit(event) {
    event.preventDefault();

    const checkboxpolicy = checkboxpolicyRef.current.checked;
    if (!checkboxpolicy) alert("נדרש לסמן הסכמה לתנאי השימוש ומדניות המשלוחים");
    else {
      props.AddCart(
        state.Measure,
        state.Pants,
        state.printing,
        props.location.state.prod
      );
      alert("מוצר זה נוסף לעגלה בהצלחה");
      props.history.push("/Cart");
    }
  }

  return (
    <react.Fragment>
      <div className="ProductSelection">
        <PopupImgPolicy
          imgName={props.location.state.prod.picture2}
          policyopen={isOpepolicyn}
          imgopen={isOpen}
          handleShowDialogg={handleShowDialog}
          handleShowDialogpolicyy={handleShowDialogpolicy}
        />

        <form onSubmit={handleSubmit}>
          <ul>
            <li style={{ fontSize: "25px" }}>
              {props.location.state.prod.name}
            </li>
            <li>
              <img
                src={
                  process.env.REACT_APP_BACKEND_URL +
                  `${props.location.state.prod.picture}`
                }
                alt="logo"
                style={{ width: "180px", height: "175px" }}
              />
            </li>

            <li>
              <del>ILS {props.location.state.prod.Previous_price}</del>
            </li>
            <li style={{ paddingBottom: "15px" }}>
              ILS {props.location.state.prod.praic}
            </li>

            {props.location.state.prod.Measure === true && (
              <li>
                <b>מידה</b>
                <br></br>
                <select name="Measure" onChange={handleChange}>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </li>
            )}
            {props.location.state.prod.Pants === true && (
              <li>
                <b>תוספת תוספת מכנסים 20 ש''ח</b>
                <br></br>
                <select name="Pants" onChange={handleChange}>
                  <option value="no">לא</option>
                  <option value="yes">כן</option>
                </select>
              </li>
            )}
            {props.location.state.prod.printing === true && (
              <li>
                <b>הדפסה על החולצה</b>
                <br></br>
                <select name="printing" onChange={handleChange}>
                  <option value="no">לא</option>
                  <option value="yes">כן</option>
                </select>
              </li>
            )}
            <li>
              <b>
                ?האם אתה מסכים
                <span
                  onClick={handleShowDialogpolicy}
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  לתנאי השימוש ומדניות המשלוחים
                </span>
              </b>
              <input ref={checkboxpolicyRef} name="isGoing" type="checkbox" />
            </li>
            <button style={{ marginTop: "15px" }} type="submit">
              לחץ כאן להוספה לעגלה
            </button>
            <br />
          </ul>
        </form>
        {props.token ? (
          <button style={{ marginTop: "15px" }} onClick={handleDel}>
            מחק מוצר
          </button>
        ) : null}
        {props.location.state.prod.picture2 && (
          <ul className="ulImag">
            <li>
              <img
                onClick={handleShowDialog}
                src={
                  process.env.REACT_APP_BACKEND_URL +
                  `${props.location.state.prod.picture2}`
                }
                alt="logo"
                style={{ width: "150px", height: "150px" }}
              />
            </li>
          </ul>
        )}
      </div>
    </react.Fragment>
  );
}

const st = (state) => {
  return {
    countCart: state.countCart,
    token: state.token,
  };
};

const arrCart = (dispatch) => {
  return {
    AddCart: (Measure, Pants, printing, prod) =>
      dispatch({ type: "add", Measure, Pants, printing, selectItem: prod }),
  };
};

export default connect(st, arrCart)(ProductSelection);
