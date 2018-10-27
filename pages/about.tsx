import * as React from "react";
import { Component } from "react";

import Head from "next/head";

class About extends Component {
  render() {
    return (
      <div className="container hebrew">
        <Head>
          <title>קריית החינוך פארק המדע</title>
        </Head>
        <div className="firstSection">
          <h1>התפיסה הפדגוגית</h1>
          <p>
            "פארק המדע" הינו בית ספר שש שנתי צומח. בשנה"ל תשע"ח לומדים בבית הספר
            תלמידים בחטיבת הביניים בשכבות ז' וח' ובתיכון בשכבות י' וי"א.{" "}
          </p>
          <p>
            קריית החינוך "פארק המדע" מהווה דוגמה ייחודית לחיבור בין פדגוגיה
            חדשנית לבין מבנה אדריכלי. ייעודה של קריית החינוך הוא לאפשר שילוב של
            כל אוכלוסיית נס ציונה בבית הספר, כאשר כל תלמיד ילמד על פי רמתו ועל
            פי תחומי העניין שלו. לכן, בדומה ללימודים במוסדות אקדמיים, הלימודים
            בתיכון מאורגנים במבנה של "פקולטות". כל אחת מהפקולטות עוסקת בציר
            מרכזי, שסביבו ניתן ללמוד את אותו תחום מקצועי בהיבטים שונים וברמות
            שונות תוך שיתופי פעולה בין - תחומיים בין הפקולטות השונות. הפקולטות
            הראשונות שנפתחו עוסקות בתחום המדעים והבריאות ובתחום המחשבים והסייבר.
            הלימודים בקריית החינוך מייצרים הזדמנויות הקושרות את חווית הלמידה אל
            העולם שמחוץ לחדר הכיתה תוך שימת דגש על שיתופי פעולה עם הקהילה, חינוך
            לערכים ותרומה לחברה. תלמידי מגמת הרפואה מסיירים בבתי חולים, שם הם
            פוגשים את ההיבטים היישומים של עולם הרפואה. תלמידי המחשבים והסייבר
            מסיירים בחברות הייטק שם הם לומדים על תהליכי יזמות וחדשנות. גם הקרבה
            לפארק המדע, הפותחת חלון הזדמנויות להעצמת הלמידה ע"י יצירת קשרים עם
            חברות שונות בפארק (כגון "קמהדע" ועוד).
            <br />
            בחטיבת הביניים פועלות בנוסף לקבוצות המצוינות, תכניות העשרה ייחודיות
            כגון רובוטיקה, פיתוח חשיבה יצירתית ע"י לימודי אומנות, פרויקטים
            ייחודים כגון הדפסה בתלת ממד ועוד.
          </p>
        </div>
        <div className="secondSection">
          <h1>קמפוס למידה "פארק המדע"</h1>
          <p>
            בשנת הלימודים תשע"ח העמקנו בתהליך של מימוש חזון בית הספר בדבר "קמפוס
            למידה פארק המדע", הקושר בין חברות בפארק לבין בית הספר, על ידי פתיחת
            דלתותיהן של חברות הייטק וביוטק בפארק המדע ללמידה והיכרות
            <br />
            הפרויקט החל בביקור של נציגי החברות בבית הספר, בו הוצג החזון והחלה
            חשיבה משותפת על ממשקים אפשריים. הפרויקט יצא לדרך בעזרת קבוצת הורים
            מוועד ההורים המוסדי שלקחו על עצמם את יצירת הקשר עם החברות. כצעד
            ראשון במימוש החזון, החלו ביקורים של תלמידי שכבת ח' בחברות שונות
            בפארק. תודה לחברות שלוקחות חלק בחזון שלנו:{" "}
            <a href="http://www.kamada.com/heb/">KAMADA</a>,{" "}
            <a href="http://www.appliedmaterials.com/">Applied Materials</a>,{" "}
            <a href="http://www.hpindigo.co.il/">HP Indigo</a>,{" "}
            <a href="https://www.landanano.com/">Landa</a>,{" "}
            <a href="http://www/futuragene.com/">FuturaGene</a>,{" "}
            <a href="https://www.hylabs.co.il/">Hy-labs</a>,{" "}
            <a href="http://quarkpharma.com">QBI</a>,{" "}
            <a href="https://www.mwgroup.net/en">M+W</a>,{" "}
            <a href="https://www.como.com/">Como</a>,{" "}
            <a href="https://www.gehealthcare.com/en">GE Healthcare</a> ו-
            <a href="https://elbitsystems.com/products/electro-optics-systems/">
              El-Op
            </a>
            .<br />
            תודה מיוחדת למיכל הורביץ מוועד ההורים המוסדי על עזרתה הרבה בהוצאת
            המיזם לפועל
          </p>
        </div>

        <style jsx>{`
          a {
            color: #3e618f;
            opacity: 0.65;
            transition: all 0.3s;
          }

          a:hover {
            color: #3e618f;
            opacity: 1;
            text-decoration: none;
          }

          h1 {
            color: #3e618f;
          }

          .hebrew {
            text-align: right;
            direction: rtl;
          }
        `}</style>
      </div>
    );
  }
}

export default About;
