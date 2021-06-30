import react, { useState } from "react";
import Input from "../Input/Input";

const Payment = (props) => {
  const [state, setState] = useState({
    fullName: {
      elementtype: "input",
      type: "text",
      value: "",
      label: "שם מלא",
      name: "fullName",
    },
    email: {
      elementtype: "input",
      type: "email",
      value: "",
      label: "אמייל",
      name: "email",
    },
    phoneNumber: {
      elementtype: "input",
      type: "text",
      value: "",
      label: "מספר טלפון",
      name: "phoneNumber",
    },
    company: {
      elementtype: "input",
      type: "text",
      value: "",
      label: "חברה",
      name: "company",
    },
    addres: {
      elementtype: "input",
      type: "text",
      value: "",
      label: "כתובת",
      name: "addres",
    },
    country: {
      elementtype: "input",
      type: "text",
      value: "",
      label: "מדינה",
      name: "country",
    },
    City: {
      elementtype: "input",
      type: "text",
      value: "",
      label: "עיר",
      name: "City",
    },
    PostalCode: {
      elementtype: "input",
      type: "text",
      value: "",
      label: "מיקוד",
      name: "PostalCode",
    },
    StateOrCounty: {
      elementtype: "input",
      type: "text",
      value: "",
      label: "מחוז/מדינה",
      name: "StateOrCounty",
    },
    DeliveryMethod: {
      elementtype: "select",
      options: [
        { value: "paypal", displayValue: "paypal" },
        { value: "העברה בנקאית,", displayValue: "העברה בנקאית" },
      ],
      label: "שיטת משלוח",
      name: "DeliveryMethod",
    },
    paymentMethod: {
      elementtype: "select",
      options: [
        { value: "רגיל", displayValue: "רגיל" },
        { value: "מהיר", displayValue: "מהיר" },
      ],
      label: "שיטת תשלום",
      name: "paymentMethod",
    },
    Comments: {
      elementtype: "textarea",
      type: "text",
      value: "",
      label: "הערות",
      name: "Comments",
    },
  });

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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(state);
    alert("תודה שבחרת בנו. sport4you");
  }

  if (props.isPaymentOpen)
    return (
      <react.Fragment>
        <dialog
          className="dialogpoppayment"
          style={{ position: "absolute" }}
          open
        >
          <form onSubmit={handleSubmit}>
            <Input
              elementtype={state.fullName.elementtype}
              type={state.fullName.type}
              label={state.fullName.label}
              name={state.fullName.name}
              Change={(event) => handleChange(event)}
            />

            <Input
              elementtype={state.email.elementtype}
              type={state.email.type}
              label={state.email.label}
              name={state.email.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.phoneNumber.elementtype}
              type={state.phoneNumber.type}
              label={state.phoneNumber.label}
              name={state.phoneNumber.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.company.elementtype}
              type={state.company.type}
              label={state.company.label}
              name={state.company.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.addres.elementtype}
              type={state.addres.type}
              label={state.addres.label}
              name={state.addres.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.country.elementtype}
              type={state.country.type}
              label={state.country.label}
              name={state.country.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.City.elementtype}
              type={state.City.type}
              label={state.City.label}
              name={state.City.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.PostalCode.elementtype}
              type={state.PostalCode.type}
              label={state.PostalCode.label}
              name={state.PostalCode.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.StateOrCounty.elementtype}
              type={state.StateOrCounty.type}
              label={state.StateOrCounty.label}
              name={state.StateOrCounty.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.DeliveryMethod.elementtype}
              options={state.DeliveryMethod.options}
              label={state.DeliveryMethod.label}
              name={state.DeliveryMethod.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.paymentMethod.elementtype}
              options={state.paymentMethod.options}
              label={state.paymentMethod.label}
              name={state.paymentMethod.name}
              Change={(event) => handleChange(event)}
            />
            <Input
              elementtype={state.Comments.elementtype}
              type={state.Comments.type}
              label={state.Comments.label}
              name={state.Comments.name}
              Change={(event) => handleChange(event)}
            />

            <button type="submit">שלם</button>
            <button onClick={props.handleShowDialogPayment}>סגור</button>
          </form>
        </dialog>
      </react.Fragment>
    );
  else return null;
};
export default Payment;
