import react from "react";
import "./PopupImgPolicy.css";

const PopupImgPolicy = (props) => {
  if (props.policyopen)
    return (
      <react.Fragment>
        <dialog
          className="dialogpop"
          style={{ position: "absolute" }}
          open
          onClick={props.handleShowDialogpolicyy}
        >
         <p>
          <b>:מדיניות משלוחים</b>
          
          <br />
          ! התשלום הוא מראש
          <br />
          נשלח לכם בקשה לתשלום המוצר דרך העברה בנקאית או פאיפל לפי מה שתבחר
          <br />
          זמן עיבוד ההזמנה לוקח בין 2/3 ימיי עסקים מספר מעקב החבילה יישלח .במייל
          כשלושה עד עשרה ימים לאחר ביצוע ההזמנה באתר
          <br />
          זמן הגעה ממוצע מביצוע ההזמנה: 15/30 ימיי עסקים מרגע השליחה לרוב מגיע
          לפני
          <br />
          .אין התחייבות על זמן הגעת החבילות בדואר אויר רשום
          <br />
          זמן המתנה משוער למשלוח מהיר כ14 ימיי עסקים <br />
          החבילות נשלחות בדואר אוויר רשום ואין לנו כל שליטה על זמן ההגעה המדויק
          של החבילות לאחר שנשלחו. לעתים ייתכנו עיכובים עקב הקורונה, חופשות,
          בדיקות מכס שגרתיות או ריבוי חבילות במרכזי המיון. במקרה של ! עיכוב, יש
          להיעזר בסבלנות. בסוף הכל מגיע
          <br />
          לאחר הגעת החבילה לנקודת האיסוף הקרובה למקום המגורים, תתקבל הודעת סמס
          לנייד מטעם הדואר לאיסוף החבילה. אנו גם עוקבים ומעדכנים על הגעה, נא .לא
          לדאוג
          <br />
          במידה וחבילה לא תגיע ליעדה לאחר 60 יום, תישלח הזמנתכם בשנית ללא כל
          חיוב
          <br />
          . במקרה של אי מסירה ניתן ליצור איתנו קשר
          <br />
          תקנון ורכישה
          <br />
          <br />
          כל המוצרים המופיעים בתמונות הן להמחשה בלבד. לעתים ייתכנו מספר גרסאות
          לאותו המוצר שעשויות להיות מעט שונות מן המוצג באתר (תלוי מפעל, פס
          ייצור).
          <br />
          במידה והגיע מוצר שאינו תואם את פרטי ההזמנה (דגם\מידה\צבע), יישלח אליכם
          מוצר חדש התואם את הזמנתכם. כל המוצרים עוברים בדיקה לפני שילוחם. במידה
          והגיע מוצר עם פגם ייצור, אנא שלחו תמונה והסבר ונשלח . לכם מוצר חדש
          <br />
          . בחירת מידה אנא בדקו היטב את טבלת המידות לפני בחירת המידה
          <br />
          המוצרים נשלחים מחו"ל באופן אישי ולא ניתן להחזירם עקב בחירת מידה לא .
          מתאימה
          <br />
          במקרה של התלבטות, בחרו במידה הגדולה יותר או צרו עמנו קשר להתייעצות .
          לרוב המידות מתאימות לבקשת הלקוח
          <br />
          ביטולי הזמנות ביטול הזמנה וקבלת החזר כספי מלא עד 24 שעות מהזמנת .
          המוצר באתר
          <br />
          במקרה ובוטלה הזמנה לאחר 24 שעות, אך עדיין לא נשלחה, יקבל הלקוח החזר
          מלא לחשבון ממנו שולמה ההזמנה בקיזוז של 25 ש"ח בעבור דמי טיפול . ועמלות
          <br />
          החזר לכרטיס אשראי ינוכה ב 5% דמי חיוב המקוזז מחברת האשראי בעבור .
          פעולת ההחזר
          <br />
          לא ניתן לבטל הזמנה לאחר שנשלחה
          <br />
          כביסות ושימור המוצר
          <br />
          על מנת לשמור על איכות המוצרים וההדפסות, יש להפוך את הבגד ולכבסו ביד .
          או בכביסה עדינה וקרה
          <br />
          ההדפסות על חולצות הכדורגל הנן הדפסות חיצוניות, דקות ועדינות, פחות .
          כביסות יאריכו את חיי ההדפס
          <br />
          אין החברה אחראית על מוצר לאחר שימוש, בגד שנלבש\כובס ו\או שהורדו ממנו
          התוויות
          <br /><br />
         <b>:נגיף הקורונה</b> 
          <br />
          לקוחות יקרים בעקבות נגיף הקורונה המשתולל בעולם זמן ההמתנה למוצר ארוך
          מהרגיל
          <br />
          ! אנו עושים מאמצים לכך שתקבלו את המוצרים שלכם בהקדם האפשרי
          <br />
          החבילות נשלחות בדואר אוויר ואין לנו כל שליטה על זמן ההגעה המדויק של
          החבילות לאחר שנשלחו. המצב היום לא רגיל ולעתים ייתכנו עיכובים עקב נגיף
          הקורנה, בדיקות מכס שגרתיות או ריבוי חבילות במרכזי המיון. במקרה של
          עיכוב, יש להיעזר בסבלנות. אנו גם עוקבים ומעדכנים על הגעה, נא לא
          !!לדאוג בסוף הכל מגיע
          <br />
          אנו זמינים לכל שאלה <br /><br />
          <b>:יצירת קשר</b>
          <br />
          
          אינסטגרם פייסבוק
          <br />
          בוואטספ: 0526280252 <br />
          במייל: sport4you@yahoo.com
          <br />
        </p>
        </dialog>
      </react.Fragment>
    );
  else if (props.imgopen)
    return (
      <react.Fragment>
        <dialog
          className="dialogpop"
          style={{ position: "absolute" }}
          open
          onClick={props.handleShowDialogg}
        >
          <img
            className="imagepop"
            onClick={props.handleShowDialogg}
            src={props.imgName}
            alt="popimg"
          />
        </dialog>
      </react.Fragment>
    );
  else return null;
};

export default PopupImgPolicy;
