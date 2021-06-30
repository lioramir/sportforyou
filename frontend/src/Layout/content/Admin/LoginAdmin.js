import react, { useState } from "react";
import { connect } from "react-redux";
import Input from "../../component/Input/Input";
import "./LoginAdmin.css";

const LoginAdmin = (props) => {
  const [UserAdmin, setUserAdmin] = useState({
    UserName: {
      elementtype: "input",
      type: "text",
      value: "",
      label: "שם משתמש",
      name: "UserName",
    },

    UserPassword: {
      elementtype: "input",
      type: "Password",
      label: "סיסמה",
      value: "",
      name: "UserPassword",
    },
  });
  function handleChange(event) {
    const updatedState = {
      ...UserAdmin,
    };

    const updatedStateElement = {
      ...updatedState[[event.target.name]],
    };
    updatedStateElement.value = event.target.value;
    updatedState[[event.target.name]] = updatedStateElement;

    setUserAdmin({
      ...updatedState,
    });
  }
  const handleSubmit = async (event) => {
    try {
      const response = await fetch("http://localhost:5000/LoginAdmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserName: UserAdmin.UserName.value,
          UserPassword: UserAdmin.UserPassword.value,
        }),
      });
      const responseData = await response.json();
      console.log(responseData.token);
      const tokenExpirationDate = new Date(
        new Date().getTime() + 1000 * 60 * 60
      );
      localStorage.setItem(
        "adminToken",
        JSON.stringify({
          token: responseData.token,
          expiration: tokenExpirationDate.toString(),
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <react.Fragment>
      <div className="LoginAdmin">
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <Input
                elementtype={UserAdmin.UserName.elementtype}
                type={UserAdmin.UserName.type}
                label={UserAdmin.UserName.label}
                name={UserAdmin.UserName.name}
                Change={(event) => handleChange(event)}
              />
            </li>
            <li>
              <Input
                elementtype={UserAdmin.UserPassword.elementtype}
                type={UserAdmin.UserPassword.type}
                label={UserAdmin.UserPassword.label}
                name={UserAdmin.UserPassword.name}
                Change={(event) => handleChange(event)}
              />
            </li>
            <button type="submit">התחבר</button>
          </ul>
        </form>
      </div>
    </react.Fragment>
  );
};
const AdminnLogin = (dispatch) => {
  return {
    AdminnLogin: (token) => dispatch({ type: "AdminLogin", token }),
  };
};

export default connect(null, AdminnLogin)(LoginAdmin);
