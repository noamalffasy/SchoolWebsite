import * as React from "react";
import { Component } from "react";

import Link from "next/link";
import { SingletonRouter } from "next/router";

interface Props {
  router: SingletonRouter;
  white?: boolean;
}

class Navbar extends Component<Props> {
  render() {
    const { white, router } = this.props;

    return (
      <div className={`Navbar ${white ? "white" : ""}`}>
        <Link href="/">
          <a className={`nav-item ${router.pathname === "/" ? "active" : ""}`}>
            <img
              alt=""
              sizes="4rem"
              srcSet={`/static/img/logos/64px${
                white ? "_white" : ""
              }.png 64w, /static/img/logos/128px${
                white ? "_white" : ""
              }.png 128w, /static/img/logos/256px${
                white ? "_white" : ""
              }.png 256w`}
              className="logo"
            />
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`nav-item ${
              router.pathname === "/about" ? "active" : ""
            }`}
          >
            אודות
          </a>
        </Link>
        <Link href="/events">
          <a
            className={`nav-item ${
              router.pathname === "/events" || router.pathname === "/event"
                ? "active"
                : ""
            }`}
          >
            אירועים
          </a>
        </Link>
        <div className="left">
          <Link href="/signup">
            <a
              className={`nav-item ${
                router.pathname === "/signup" ? "active" : ""
              }`}
            >
              הרשמה
            </a>
          </Link>
          <Link href="/login">
            <a
              className={`nav-item ${
                router.pathname === "/login" ? "active" : ""
              }`}
            >
              כניסה
            </a>
          </Link>
        </div>
        <style jsx>{`
          .Navbar {
            display: flex;
            text-align: right;
            direction: rtl;
            padding: 1rem 0;
            align-items: center;
          }

          .Navbar a.nav-item {
            margin: 0 0.5rem;
            color: #3e618f;
            font-size: 1.1rem;
            opacity: 0.5;
            transition: all 0.3s;
          }

          .Navbar.white a.nav-item {
            color: #fff;
          }

          .Navbar a.nav-item:first-child {
            margin: 0 0 0 0.5rem;
          }

          .Navbar a.nav-item.active,
          .Navbar a.nav-item:hover,
          .Navbar a.nav-item:focus {
            text-decoration: none;
            outline: 0;
            opacity: 1;
          }

          .Navbar a.nav-item .logo {
            height: 4rem;
            width: 4rem;
          }

          .Navbar .left {
            margin-right: auto;
          }
        `}</style>
      </div>
    );
  }
}

export default Navbar;
