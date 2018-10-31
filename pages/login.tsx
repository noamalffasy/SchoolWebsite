import * as React from "react";
import { Component } from "react";

import Head from "next/head";
import Input from "../components/Input";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>כניסה | קריית החינוך פארק המדע</title>
        </Head>
        <form action="/login">
          <Input label="שם משתמש" type="username" />
          <Input label="סיסמא" type="password" />
          <input type="submit" value="כניסה" />
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

          input[type="submit"]:hover {
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

export default Login;
