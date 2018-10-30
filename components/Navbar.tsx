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
          <a
            className={router.pathname === "/" ? "nav-item active" : "nav-item"}
          >
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
            className={
              router.pathname === "/about" ? "nav-item active" : "nav-item"
            }
          >
            אודות
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={
              router.pathname === "/contact" ? "nav-item active" : "nav-item"
            }
          >
            צור קשר
          </a>
        </Link>
        <div className="left">
          <Link href="/signup">
            <a
              className={
                router.pathname === "/signup" ? "nav-item active" : "nav-item"
              }
            >
              הרשמה
            </a>
          </Link>
          <Link href="/login">
            <a
              className={
                router.pathname === "/login" ? "nav-item active" : "nav-item"
              }
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
          .Navbar a.nav-item:hover {
            text-decoration: none;
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
