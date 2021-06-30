import emailjs from "emailjs-com";

import "./SendEmail.css";

const SendEmail = () => {
  function send(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l7755kf",
        "template_tbjepch",
        e.target,
        "user_kmNkNHxki4K04dZexSWdB"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="SendEmail">
      <h1> צור איתנו קשר</h1>

      <form onSubmit={send}>
        <label>שם</label>

        <input type="text" name="name" size="20" />

        <label> אימייל</label>

        <input type="email" name="user_email" size="35" />

        <label> הודעה</label>

        <textarea name="massage" rows="10" cols="50" />

        <input type="submit" value="שלח" />
      </form>
    </div>
  );
};
export default SendEmail;
