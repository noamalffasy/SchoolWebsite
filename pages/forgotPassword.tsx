import * as React from "react";
import { Component } from "react";

import Head from "next/head";

import Input from "../components/Input";

class ForgotPassword extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>שכחת סיסמא - קריית החינוך פארק המדע</title>
        </Head>
        <form action="/signup">
          <Input label="שם משתמש" type="username" />
          <p className="text">
            על מנת לוודא שהחשבון אכן שייך לך, עליך לענות על השאלה שבחרת:
          </p>
          <p className="question">שאלת האימות שנבחרה</p>
          <Input label="תשובה לשאלת אימות" type="text" />
          <input type="submit" value="הרשמה" />
        </form>
        <style jsx>{`
          p.text,
          p.question {
            direction: rtl;
            text-align: right;
            margin: 0;
          }

          p.text {
            font-size: 0.9rem;
          }

          p.question {
            font-size: 1.05rem;
            margin: 0 0 1.2rem;
          }

          input[type="submit"] {
            border: 0;
            padding: 0;
            color: #3e618f;
            background: none;
            opacity: 0.5;
            cursor: pointer;
            transition: all 0.3s;
          }

          input[type="submit"]:hover,
          input[type="submit"]:focus {
            opacity: 1;
          }

          @media (min-width: 768px) {
            form {
              width: 50%;
              margin: 0 auto;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default ForgotPassword;
