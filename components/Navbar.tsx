import * as React from "react";
import { Component } from "react";

import Link from "next/link";
import { SingletonRouter } from "next/router";

import { ASSET_URL } from "../utils/constants";

interface Props {
  router: SingletonRouter;
  white?: boolean;
}

interface State {
  open: boolean;
}

class Navbar extends Component<Props, State> {
  state = { open: false };

  toggleNavbar = () => {
    this.setState(prevState => ({
      ...prevState,
      open: !prevState.open
    }));
  };

  render() {
    const { white, router } = this.props;
    const { open } = this.state;

    return (
      <div
        className={`Navbar ${white ? "white" : ""} ${open ? "open" : ""}`}
        id="Navbar"
      >
        <div className="navbar-top">
          <Link href="/" as={`${ASSET_URL}/`}>
            <a
              className={`nav-item brand ${
                router.pathname === "/" ? "active" : ""
              }`}
            >
              <img
                alt=""
                sizes="4rem"
                srcSet={`${ASSET_URL}/static/img/logos/64px${
                  white || open ? "_white" : ""
                }.png 64w, ${ASSET_URL}/static/img/logos/128px${
                  white || open ? "_white" : ""
                }.png 128w, ${ASSET_URL}/static/img/logos/256px${
                  white || open ? "_white" : ""
                }.png 256w`}
                className="logo"
              />
            </a>
          </Link>
          <button className="menu-btn" onClick={this.toggleNavbar}>
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
        <div className="menu">
          <Link href="/" as={`${ASSET_URL}/`}>
            <a
              className={`nav-item brand ${
                router.pathname === "/" ? "active" : ""
              }`}
            >
              <img
                alt=""
                sizes="4rem"
                srcSet={`${ASSET_URL}/static/img/logos/64px${
                  white ? "_white" : ""
                }.png 64w, ${ASSET_URL}/static/img/logos/128px${
                  white ? "_white" : ""
                }.png 128w, ${ASSET_URL}/static/img/logos/256px${
                  white ? "_white" : ""
                }.png 256w`}
                className="logo"
              />
            </a>
          </Link>
          <Link href="/" as={`${ASSET_URL}/`}>
            <a
              className={`nav-item home ${
                router.pathname === "/" ? "active" : ""
              }`}
            >
              דף הבית
            </a>
          </Link>
          <Link href="/about" as={`${ASSET_URL}/about`}>
            <a
              className={`nav-item ${
                router.pathname === "/about" ? "active" : ""
              }`}
            >
              אודות
            </a>
          </Link>
          <Link href="/highlights" as={`${ASSET_URL}/highlights`}>
            <a
              className={`nav-item ${
                router.pathname === "/highlights" ||
                router.pathname === "/highlight"
                  ? "active"
                  : ""
              }`}
            >
              מגמות
            </a>
          </Link>
          <Link href="/events" as={`${ASSET_URL}/events`}>
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
          <Link href="/gallery" as={`${ASSET_URL}/gallery`}>
            <a
              className={`nav-item ${
                router.pathname === "/gallery" ? "active" : ""
              }`}
            >
              גלרייה
            </a>
          </Link>
          <div className="left">
            <Link href="/signup" as={`${ASSET_URL}/signup`}>
              <a
                className={`nav-item ${
                  router.pathname === "/signup" ? "active" : ""
                }`}
              >
                הרשמה
              </a>
            </Link>
            <Link href="/login" as={`${ASSET_URL}/login`}>
              <a
                className={`nav-item ${
                  router.pathname === "/login" ? "active" : ""
                }`}
              >
                כניסה
              </a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .Navbar {
            position: absolute;
            display: flex;
            text-align: right;
            direction: rtl;
            width: 100%;
            height: 100%;
            max-height: calc(4rem + 2 * 0.5rem + 1rem * 2);
            padding: 1rem 0;
            background: none;
            align-items: center;
            flex-direction: column;
            overflow: hidden;
            left: 0;
            top: 0;
            right: 0;
            z-index: 1000;
            transition: all 0.3s;
          }

          .Navbar.open {
            position: fixed;
            background: rgba(62, 97, 143);
            max-height: 100%;
          }

          .Navbar .navbar-top {
            display: flex;
            width: 100%;
            padding: 0 0.5rem;
            align-items: center;
            justify-content: center;
          }

          .Navbar .navbar-top a.brand {
            padding: 0.5rem 0.5rem;
          }

          .Navbar .navbar-top button.menu-btn {
            display: flex;
            border: 0;
            width: 2.5rem;
            height: 100%;
            margin-right: auto;
            padding: 0 0.5rem;
            padding: 0 calc(env(safe-area-inset-left) + 0.5rem) 0
              calc(env(safe-area-inset-right) + 0.5rem);
            background: none;
            vertical-align: middle;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .Navbar .navbar-top button.menu-btn span.bar {
            display: block;
            width: 1.5rem;
            height: 2px;
            border-radius: 0.3rem;
            background: #3e618f;
            opacity: 0.5;
            transition: all 0.3s;
          }

          .Navbar.open .navbar-top button.menu-btn span.bar,
          .Navbar.white .navbar-top button.menu-btn span.bar {
            background: #fff;
          }

          .Navbar .navbar-top button.menu-btn:hover span.bar {
            opacity: 1;
          }

          .Navbar.open .navbar-top button.menu-btn span.bar {
            transform: rotate(45deg) translateY(4px) translateX(3px);
          }

          .Navbar .navbar-top button.menu-btn span.bar:last-child {
            margin: 0.5rem 0 0;
          }

          .Navbar.open .navbar-top button.menu-btn span.bar:last-child {
            transform: rotate(-45deg) translateY(-4px) translateX(3px);
          }

          .Navbar .menu {
            width: 100%;
          }

          .Navbar .menu a.brand.nav-item {
            display: none;
          }

          .Navbar .menu a.nav-item {
            display: block;
            margin: 0;
            padding: 0.5rem 1.5rem;
            color: #3e618f;
            font-size: 1.3rem;
            opacity: 0.5;
            transition: all 0.3s;
          }

          .Navbar.open .menu a.nav-item,
          .Navbar.white .menu a.nav-item {
            color: #fff;
          }

          .Navbar .menu a.nav-item:first-child {
            margin: 0 0 0 0.5rem;
          }

          .Navbar .menu a.nav-item.active,
          .Navbar .menu a.nav-item:hover,
          .Navbar .menu a.nav-item:focus {
            text-decoration: none;
            outline: 0;
            opacity: 1;
          }

          .Navbar .menu a.nav-item .logo {
            height: 4rem;
            width: 4rem;
          }

          .Navbar .menu .left {
            margin-right: auto;
          }

          @media (min-width: 768px) {
            .Navbar {
              position: static;
            }

            .Navbar.open {
              max-height: calc(4rem + 2 * 0.5rem + 1rem * 2);
              background: none;
            }

            .Navbar .navbar-top,
            .Navbar .menu a.home.nav-item {
              display: none;
            }

            .Navbar .menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .Navbar .menu a.brand.nav-item,
            .Navbar .menu a.nav-item {
              display: inline-block;
            }

            .Navbar .menu a.nav-item {
              margin: 0 0.5rem;
              padding: 0;
              font-size: 1.1rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Navbar;
