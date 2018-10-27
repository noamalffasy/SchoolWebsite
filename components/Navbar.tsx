import * as React from "react";
import { Component } from "react";

import { SingletonRouter } from "next/router";

interface Props {
    router: SingletonRouter;
}

class Navbar extends Component<Props> {
  render() {
    const { router } = this.props;

    return (
      <div className="Navbar">
        <a
          href="/"
          className={router.pathname === "/" ? "nav-item active" : "nav-item"}
        >
            <img alt="" sizes="4rem" srcSet="/static/img/logos/64px.png 64w, /static/img/logos/128px.png 128w, /static/img/logos/256px.png 256w" className="logo"/>
        </a>
        <a
          href="/about"
          className={
            router.pathname === "/about" ? "nav-item active" : "nav-item"
          }
        >
          אודות
        </a>
        <a
          href="/contact"
          className={
            router.pathname === "/contact" ? "nav-item active" : "nav-item"
          }
        >
          צור קשר
        </a>
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
        `}</style>
      </div>
    );
  }
}

export default Navbar;
