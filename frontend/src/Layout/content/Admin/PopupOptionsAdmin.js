import react, { useState } from "react";
import Input from "../../component/Input/Input";
import { connect } from "react-redux";

const PopupOptionsAdmin = (props) => {
  const [state, setState] = useState({
    name: {
      elementtype: "input",
      type: "text",
      value: "",
      label: "שם המוצר",
      name: "name",
    },
    img: {
      elementtype: "input",
      type: "file",
      value: null,
      label: "תמונה",
      name: "img",
    },
    category: {
      elementtype: "input",
      type: "text",
      label: "קטגוריה",
      value: "",
      name: "category",
    },
    praic: {
      elementtype: "input",
      type: "text",
      value: null,
      label: "מחיר",
      name: "praic",
    },
    Previous_price: {
      elementtype: "input",
      type: "text",
      value: null,
      label: "מחיר ישן",
      name: "Previous_price",
    },
    Measure: {
      elementtype: "select",

      options: [
        { value: false, displayValue: "לא" },
        { value: true, displayValue: "כן" },
      ],
      label: "להוסף אפשרות של מידה?",
      value: false,
      name: "Measure",
    },
    printing: {
      elementtype: "select",

      options: [
        { value: false, displayValue: "לא" },
        { value: true, displayValue: "כן" },
      ],
      value: false,
      label: "להוסיף אפשרות של הדפסה?",
      name: "printing",
    },
    Pants: {
      elementtype: "select",

      options: [
        { value: false, displayValue: "לא" },
        { value: true, displayValue: "כן" },
      ],
      label: "להוסיף אפשרות למכנסיים?",
      value: false,
      name: "Pants",
    },
    picture2: {
      elementtype: "input",
      type: "file",
      value: null,
      label: "תמונה מידות/תמונה 2",
      name: "picture2",
    },
  });

  function ImageUpload(event) {
    if (event.target.files && event.target.files.length === 1) {
      const updatedState = {
        ...state,
      };

      const updatedStateElement = {
        ...updatedState[[event.target.name]],
      };
      updatedStateElement.value = event.target.files[0];
      updatedState[[event.target.name]] = updatedStateElement;

      setState({
        ...updatedState,
      });
    } else console.log("not file");
  }

  function handleChange(event) {
    const updatedState = {
      ...state,
    };

    const updatedStateElement = {
      ...updatedState[[event.target.name]],
    };
    updatedStateElement.value = event.target.value;
    updatedState[[event.target.name]] = updatedStateElement;

    setState({
      ...updatedState,
    });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", state.name.value);
      formData.append("category", state.category.value);
      formData.append("praic", state.praic.value);
      formData.append("Previous_price", state.Previous_price.value);
      formData.append("Measure", state.Measure.value);
      formData.append("printing", state.printing.value);
      formData.append("Pants", state.Pants.value);
      formData.append("image", state.img.value);
      formData.append("image1", state.picture2.value);

      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + `Admin`,
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      alert("המוצר נוסף בהצלחה");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  if (props.openOptions.addItem)
    return (
      <react.Fragment>
        <dialog className="dialogpop" style={{ position: "absolute" }} open>
          <form onSubmit={handleSubmit}>
            <Input
              elementtype={state.name.elementtype}
              type={state.name.type}
              label={state.name.label}
              name={state.name.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.img.elementtype}
              type={state.img.type}
              label={state.img.label}
              name={state.img.name}
              accept=".jpg,.png,.jpeg"
              Change={(event) => ImageUpload(event)}
            />
            <Input
              elementtype={state.category.elementtype}
              options={state.category.options}
              label={state.category.label}
              name={state.category.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.praic.elementtype}
              type={state.praic.type}
              label={state.praic.label}
              name={state.praic.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.Previous_price.elementtype}
              type={state.Previous_price.type}
              label={state.Previous_price.label}
              name={state.Previous_price.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.Measure.elementtype}
              options={state.Measure.options}
              label={state.Measure.label}
              name={state.Measure.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.printing.elementtype}
              options={state.printing.options}
              label={state.printing.label}
              name={state.printing.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.Pants.elementtype}
              options={state.Pants.options}
              label={state.Pants.label}
              name={state.Pants.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.picture2.elementtype}
              type={state.picture2.type}
              label={state.picture2.label}
              name={state.picture2.name}
              accept=".jpg,.png,.jpeg"
              Change={(event) => ImageUpload(event)}
            />

            <button type="submit">הוסף</button>
            <button onClick={() => props.CloseOptions("addItem")}>סגור</button>
          </form>
        </dialog>
      </react.Fragment>
    );
  else if (props.openOptions.delItem)
    return (
      <react.Fragment>
        <dialog
          className="dialogpop"
          style={{ position: "absolute" }}
          open
          onClick={props.handleShowDialogg}
        >
          <h1>delItem</h1>
        </dialog>
      </react.Fragment>
    );
  else if (props.openOptions.Orders)
    return (
      <react.Fragment>
        <dialog
          className="dialogpop"
          style={{ position: "absolute" }}
          open
          onClick={props.handleShowDialogg}
        >
          <h1>Orders</h1>
        </dialog>
      </react.Fragment>
    );
  else if (props.openOptions.reports)
    return (
      <react.Fragment>
        <dialog
          className="dialogpop"
          style={{ position: "absolute" }}
          open
          onClick={props.handleShowDialogg}
        >
          <h1>addItem</h1>
        </dialog>
      </react.Fragment>
    );
  else return null;
};

const ItemSidebar = (state) => {
  return {
    items: state.item,
  };
};

export default connect(ItemSidebar)(PopupOptionsAdmin);
