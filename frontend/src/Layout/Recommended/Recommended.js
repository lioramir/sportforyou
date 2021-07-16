import react, { useEffect, useState } from "react";
import "./Recommended.css";
import { connect } from "react-redux";
import Spinner from "../component/spinner/Spinner.js";

function Recommended(props) {
  const [RecommendedImg, setRecommendedImg] = useState([]);
  const [RecommendedLoading, setRecommendedLoading] = useState(false);
  const [currentImage, setcurrentImage] = useState(0);
  const [currentLegionnairesImage, setcurrentLegionnairesImage] = useState(0);

  const [Legionnaires, setLegionnaires] = useState([]);

  useEffect(() => {
    try {
      const sendRequest = async () => {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL);
        const responseData = await response.json();
        setRecommendedImg(responseData.RecommendedImg);
        setRecommendedLoading(true);
        setLegionnaires(responseData.Legionnaires);
      };
      sendRequest();
    } catch (err) {}
  }, []);

  function switchImage() {
    if (currentImage < RecommendedImg.length - 1) {
      setcurrentImage(currentImage + 1);
    } else {
      setcurrentImage(0);
    }
    if (currentLegionnairesImage < Legionnaires.length - 1) {
      setcurrentLegionnairesImage(currentLegionnairesImage + 1);
    } else {
      setcurrentLegionnairesImage(0);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      switchImage();
    }, 4000);
    return () => clearInterval(interval);
  });

  if (RecommendedLoading) {
    return (
      <react.Fragment>
        <div className="Recommended">
          <ul>
            {RecommendedImg.length > 0 && (
              <>
                <li>מומלצים</li>
                <li>
                  <img
                    src={
                      process.env.REACT_APP_BACKEND_URL +
                      `${RecommendedImg[currentImage]}`
                    }
                    className={"two"}
                    alt="img"
                  />
                </li>
              </>
            )}
            {Legionnaires.length > 0 && (
              <>
                <li>ליגיונרים</li>
                <li>
                  <img
                    src={
                      process.env.REACT_APP_BACKEND_URL +
                      `${Legionnaires[currentLegionnairesImage]}`
                    }
                    className={"two"}
                    alt="img"
                  />
                </li>
              </>
            )}
          </ul>
        </div>
      </react.Fragment>
    );
  } else return <Spinner />;
}

const pr = (dispatch) => {
  return {
    incounr: () => dispatch({ type: "INCR" }),
  };
};

export default connect(null, pr)(Recommended);
