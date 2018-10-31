import * as React from "react";
import { Component } from "react";

import Head from "next/head";
import Image from "../components/Image";
import ImageView from "../components/ImageView";
import Embed from "../components/Embed";

class About extends Component {
  render() {
    return (
      <div className="container hebrew">
        <Head>
          <title>אודות | קריית החינוך פארק המדע</title>
        </Head>
        <div className="toc">
          <h1>תוכן עניינים</h1>
          <a href="#perspective-section">התפיסה הפדגוגית</a>
          <br />
          <a href="#campus-section">קמפוס למידה "פארק המדע"</a>
          <br />
          <a href="#moocathon-section">אירוע "מוקאתון" הסתיים בהצלחה</a>
          <br />
          <a href="#better-student-section">
            יום התלמיד המעשיר התקיים בקריית החינוך
          </a>
          <br />
          <a href="#develop-thinking-section">
            פיתוח חשיבה יצירתית ע"י לימודי אומנות, בשילוב הדפסה בתלת ממד
          </a>
          <br />
          <a href="#experimenting-with-energy-section">
            התכנית "התנסויות מעשיות באנרגיה" - בשיתוף גן המדע במכון וייצמן
          </a>
          <br />
          <a href="#playing-and-learning-section">משחקים ולומדים</a>
        </div>
        <div id="perspective-section">
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
        <div id="campus-section">
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
        <div id="moocathon-section">
          <h1>אירוע "מוקאתון" הסתיים בהצלחה</h1>
          <Embed embedSrc="https://docs.wixstatic.com/ugd/73d086_69fd2e47b9e84b8fb1179b9390696a60.pdf" />
        </div>
        <div id="better-student-section">
          <h1>יום התלמיד המעשיר התקיים בקריית החינוך</h1>
          <Embed embedSrc="https://docs.wixstatic.com/ugd/73d086_e41dcb13152148279ea7d674167a26bb.pdf" />
        </div>
        <div id="develop-thinking-section">
          <h1>פיתוח חשיבה יצירתית ע"י לימודי אומנות, בשילוב הדפסה בתלת ממד</h1>
          <p>
            כחלק מתכנית הלימודים בקריית החינוך "פארק המדע", השמה דגש על פיתוח
            חשיבה יצירתית, עוברים התלמידים במסגרת שיעורי אומנות בכיתה ז' קורס
            להיכרות עם עולם השרטוט וההדפסה בתלת ממד.
            <br /> הדפסה בתלת ממד היא טכנולוגיה המאפשרת לייצר דגמים תלת ממדיים
            היישר מתוך המחשב. בשנים האחרונות הטכנולוגיה הזאת נכנסת כמעט לכל תחום
            וכבר היום רואים את ההשפעות שלה בתחומי הייצור, העיצוב ועוד. גם בעולם
            הרפואה מתרחב השימוש בטכנולוגיה הזאת, ורופאים נעזרים בה כדי לייצר
            חלקי חילוף לאיברים שנפגמו.
            <br /> הקורס בקריית החינוך מתאפשר הודות לשיתוף פעולה עם עמותת דנור
            ששמה לה מטרה לקדם את המהפכה הטכנולוגית ואת תחום הדפסת התלת-ממד
            במערכת החינוך.
          </p>
          <ImageView>
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_53799c349bf6446580f55d8a03da890a~mv2.jpg/v1/fill/w_276,h_177,al_c,q_80,usm_0.66_1.00_0.01/73d086_53799c349bf6446580f55d8a03da890a~mv2.jpg"
              caption="בבושקה לכלבים בצורת עצם 2"
            />
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_8473970185334d85b1a781068a8f6e2d~mv2.jpg/v1/fill/w_276,h_177,al_c,q_80,usm_0.66_1.00_0.01/73d086_8473970185334d85b1a781068a8f6e2d~mv2.jpg"
              caption="בבושקה לכלבים בצורת עצם"
            />
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_a010a8293ac446bc8925d24f8ac5988b~mv2.jpg/v1/fill/w_276,h_177,al_c,q_80,usm_0.66_1.00_0.01/73d086_a010a8293ac446bc8925d24f8ac5988b~mv2.jpg"
              caption="מסרק משחק לחתול"
            />
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_4d7971d735314784a6222f66d4122865~mv2.jpg/v1/fill/w_276,h_177,al_c,q_80,usm_0.66_1.00_0.01/73d086_4d7971d735314784a6222f66d4122865~mv2.jpg"
              caption="KEYBEAR שמירת מפתחות בדמות פנדה"
            />
          </ImageView>
        </div>
        <div id="experimenting-with-energy-section">
          <h1>
            התכנית "התנסויות מעשיות באנרגיה" - בשיתוף גן המדע במכון וייצמן
          </h1>
          <p>
            תלמידי שכבת ז' לקחו חלק בתכנית שפותחה ע"י צוות גן המדע ע"ש קלור
            במכון דוידסון, בהתאם לתכנית הלימודים במדע וטכנולוגיה לכיתה ז' בנושא
            אנרגיה.
            <br />
            התכנית כללה מפגש מקדים של מדריכי גן המדע בכיתה, סיור בגן המדע ומפגש
            סיכום של מדריכי הגן שגם הוא התקיים בכיתה. במסגרת הפעילות התלמידים
            נחשפו באופן חוויתי לתופעות ומערכות שונות הממחישות את נושא שינוי
            האנרגיה, הכירו סוגים שונים של אנרגיה ובנוסף תכננו וביצעו ניסויים
            באופן חוויתי.
            <br />
            בביקור בגן המדע התלמידים לקחו חלק בפעילות חקר בנושא מכוניות סולריות,
            ואחר כך סיירו בין המתקנים השונים בגן. בין הפעילויות שהתלמידים התנסו
            בהן בכיתה- ניסוי גנרטורים, בניית דגם הממחיש המרות אנרגיה (בניית
            קטפולטה), בניית רכבת הרים ועוד.
          </p>
          <ImageView>
            <Image
              imageSrc={
                "https://static.wixstatic.com/media/73d086_e113f3205c484611b1fe7a7700cf2002~mv2.jpg/v1/fill/w_510,h_680,al_c,q_80,usm_0.66_1.00_0.01/73d086_e113f3205c484611b1fe7a7700cf2002~mv2.jpg"
              }
              caption="תלמיד עושה מתח"
            />
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_122b9ea56dd9497bbdfed3aa7adfdfb2~mv2.jpg/v1/fill/w_510,h_680,al_c,q_80,usm_0.66_1.00_0.01/73d086_122b9ea56dd9497bbdfed3aa7adfdfb2~mv2.jpg"
              caption="תלמידות מנגנות על פסנתר ענק"
            />
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_53158c0e49be486ea3c5b0c362e786e4~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_625,h_469,al_c,q_80,usm_0.66_1.00_0.01/73d086_53158c0e49be486ea3c5b0c362e786e4~mv2_d_4032_3024_s_4_2.jpg"
              caption="תלמידים בונים דגם הממחיש המרות אנרגיה"
            />
          </ImageView>
        </div>
        <div id="playing-and-learning-section">
          <h1>משחקים ולומדים</h1>
          <p>
            במסגרת שיעורי מדעים בקריית החינוך "פארק המדע", התלמידים בנו משחקים
            העוסקים בנושאי מסה, נפח ומצבי צבירה ושיחקו בהם.
          </p>
          <ImageView>
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_c9c18a89bf284253bb61ca92c61b84bc~mv2.jpg/v1/fill/w_214,h_285,al_c,q_80,usm_0.66_1.00_0.01/73d086_c9c18a89bf284253bb61ca92c61b84bc~mv2.jpg"
              caption="משחק קופסא שתלמידים בנו"
            />
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_3690dc6531e543c1962077745b722fc0~mv2.jpg/v1/fill/w_214,h_380,al_c,q_80,usm_0.66_1.00_0.01/73d086_3690dc6531e543c1962077745b722fc0~mv2.jpg"
              caption="תלמידים משחקים במשחקי הקופסא"
            />
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_ae14f4b7f39c4d85b26cd03558e18496~mv2.jpg/v1/fill/w_214,h_285,al_c,q_80,usm_0.66_1.00_0.01/73d086_ae14f4b7f39c4d85b26cd03558e18496~mv2.jpg"
              caption="משחק קופסא שתלמידים בנו 2"
            />
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_c70f133209644d7b87ba5daeb2a49acb~mv2.jpg/v1/fill/w_214,h_285,al_c,q_80,usm_0.66_1.00_0.01/73d086_c70f133209644d7b87ba5daeb2a49acb~mv2.jpg"
              caption="משחק קופסא שתלמידים בנו 3"
            />
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_b13efd5ff0fc453b8d48cd4b6d9915f5~mv2.jpg/v1/fill/w_214,h_160,al_c,q_80,usm_0.66_1.00_0.01/73d086_b13efd5ff0fc453b8d48cd4b6d9915f5~mv2.jpg"
              caption="משחק קופסא שתלמידים בנו 4"
            />
            <Image
              imageSrc="https://static.wixstatic.com/media/73d086_d1c006a7023e44f591c5ff672adbcc36~mv2.jpg/v1/fill/w_214,h_160,al_c,q_80,usm_0.66_1.00_0.01/73d086_d1c006a7023e44f591c5ff672adbcc36~mv2.jpg"
              caption="משחק קופסא שתלמידים בנו 5"
            />
          </ImageView>
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
