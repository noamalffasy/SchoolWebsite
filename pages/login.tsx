import * as React from "react";
import { Component } from "react";

import Head from "next/head";
import Link from "next/link";

import Input from "../components/Input";

import { ASSET_URL } from "../utils/constants";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>כניסה - קריית החינוך פארק המדע</title>
        </Head>
        <form action="/login">
          <Input label="שם משתמש" type="username" />
          <Input label="סיסמא" type="password" />
          <div className="bottom">
            <div className="right">
              <Link href="/signup" as={`${ASSET_URL}/signup`}>
                <a className="button">אין לך משתמש?</a>
              </Link>
              <Link href="/forgotPassword" as={`${ASSET_URL}/forgotPassword`}>
                <a className="button">שכחת את הסיסמא?</a>
              </Link>
            </div>
            <input type="submit" value="כניסה" />
          </div>
        </form>
        <style jsx global>{`
          .Input {
            margin: 1rem 0;
          }

          .bottom {
            display: flex;
            direction: rtl;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }

          .bottom .right {
            margin: 0 0 0.5rem;
          }

          .bottom .right a.button {
            margin: 0 0.5rem;
          }

          .bottom .right a.button:first-child {
            margin: 0 0 0 0.5rem;
          }

          .bottom a.button,
          .bottom input[type="submit"] {
            border: 0;
            padding: 0 0 1rem;
            color: #3e618f;
            background: none;
            opacity: 0.5;
            cursor: pointer;
            transition: all 0.3s;
          }

          .bottom a.button:hover,
          .bottom a.button:focus,
          .bottom input[type="submit"]:hover,
          .bottom input[type="submit"]:focus {
            text-decoration: none;
            opacity: 1;
          }

          @media (min-width: 576px) {
            .bottom {
              flex-direction: row;
            }
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
