import react, { useState } from "react";
import { connect } from "react-redux";
import "./Cart.css";
import { BsXCircle } from "react-icons/bs";
import Payment from "../../component/popup/Payment";

function Cart(props) {
  const [isPaymentOpen, setisPaymentOpen] = useState(false);

  function handleShowDialogPayment() {
    setisPaymentOpen(!isPaymentOpen);
  }
  return (
    <react.Fragment>
      <div className="Cart">
        <Payment
          isPaymentOpen={isPaymentOpen}
          handleShowDialogPayment={handleShowDialogPayment}
        />

        <table className="students">
          <thead>
            <tr>
              <th>שם המוצר</th>
              <th>מחיר</th>
              <th>מכנס</th>
              <th>מידה</th>
              <th>הדפסה</th>
              <th>הסרה מהעגלה</th>
            </tr>
          </thead>
          <tbody>
            {props.incart.map((m) => (
              <tr key={m.date}>
                <td>{m.selectItem.name}</td>
                <td>
                  {m.Pants === "yes"
                    ? m.selectItem.praic + 20
                    : m.selectItem.praic}
                </td>
                <td>{m.Pants}</td>
                <td>{m.Measure}</td>
                <td>{m.printing}</td>
                <td>
                  <BsXCircle
                    size="1em"
                    onClick={() =>
                      props.delfromcart(m.date, m.selectItem.praic, m.Pants)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1>סך הכול {props.TotalPrice} ש"ח</h1>
        <button onClick={handleShowDialogPayment}>למעבר לתשלום לחץ כאן</button>
      </div>
    </react.Fragment>
  );
}

const mapstatetoprps = (state) => {
  return {
    incart: state.Cart,
    TotalPrice: state.TotalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    delfromcart: (date, praic, Pants) =>
      dispatch({
        type: "del",
        cartId: date,
        praicItem: praic,
        pantsItem: Pants,
      }),
  };
};

export default connect(mapstatetoprps, mapDispatchToProps)(Cart);
