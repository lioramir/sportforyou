import react from "react";
import logo from "../../Nav/logo.png";
import "./Landing_page.css";
import top_nav from "./top_nav.jpg";
function Landing_page(props) {
  return (
    <react.Fragment>
      <div className="Landing_page">
        <img src={logo} className="logo1" alt="logo" />
        <br />
        <h2>Sport4you ברוכים הבאים לאתר החנות</h2>
        <p>
          חולצות כדורגל, חליפות כדורגל לחורף, כדורסל, אביזרים ועוד
          <br />
          !היא חנות האינטרנטית המובילה בארץ בערכות כדורגל וחליפות רישמיות של
          מועדונים האהובים עליכם Sport4you
          <br />
          .אנו מרגישים את התשוקה שלכם ושואפים לספק לכם את כל מה שאתם צריכים כדי
          לאהוד את הקבוצה האהובה עלייכם
          <br />
          !ספורט פור יו היא הבית לכדורגל ברשת - צבעי המועדון ששאתה אוהד עוברים
          דרך הוורידים שלנו
          <br />
          כשאתה חושב כדורגל, תחשוב ספורט פור יו -אנחנו איתך
        </p>

        <img
          src={top_nav}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </react.Fragment>
  );
}

export default Landing_page;
