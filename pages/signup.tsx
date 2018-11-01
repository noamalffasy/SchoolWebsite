import * as React from "react";
import { Component } from "react";

import Head from "next/head";
import Input from "../components/Input";
import Select from "../components/Select";

class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>הרשמה - קריית החינוך פארק המדע</title>
        </Head>
        <form action="/signup">
          <Input label="קוד הרשמה" type="text" />
          <Input label="אימייל" type="email" />
          <Input label="שם משתמש" type="username" />
          <Input label="סיסמא" type="password" />
          <Select
            name="securityQuestion"
            id="securityQuestion"
            placeholder="שאלת אימות"
          >
            <option value="color">מה הצבע האהוב עליך?</option>
            <option value="teacher">מה השם של המחנכת הראשונה שלך?</option>
            <option value="food">מה המאכל האהוב עליך?</option>
          </Select>
          <Input label="תשובה לשאלת אימות" type="text" />
          <input type="submit" value="הרשמה" />
        </form>
        <style jsx global>{`
          .Input {
            margin: 1rem 0;
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

export default SignUp;
