import * as React from "react";

import App, { Container } from "next/app";
import { withRouter, SingletonRouter } from "next/router";

import Navbar from "../components/Navbar";
// import WixEditor from "../components/WixEditor";

import { ASSET_URL } from "../utils/constants";

interface Props {
  router: SingletonRouter;
}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidUpdate() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        {/* <WixEditor /> */}
        <div id="main">
          {router.pathname === "/" ? (
            <>
              <div className="hero">
                <div className="background" />
                <div className="hero-inner">
                  <div className="container">
                    <Navbar router={router} white />
                  </div>
                  <div className="jumbotron">
                    <p className="lead">קריית החינוך השש שנתית</p>
                    <h1>פארק המדע</h1>
                    <p className="following">נס ציונה</p>
                  </div>
                </div>
              </div>
              <Component {...pageProps} />
            </>
          ) : (
            <>
              <div className="container">
                <Navbar router={router} />
              </div>
              <Component {...pageProps} />
            </>
          )}
          <a href="#Navbar" className="goToTop">
            <span className="arrow" />
          </a>
          <style jsx>{`
            .container {
              padding: calc(4rem + 2 * 0.5rem + 1rem * 2) 0 0 0;
            }

            .hero {
              position: relative;
              min-height: 80vh;
              background: rgba(62, 97, 143, 0.15);
              padding: 0 0 2rem;
            }

            .hero .background {
              position: absolute;
              background-color: rgba(255, 255, 255, 1);
              background-image: url(${`${ASSET_URL}/static/img/heroImage.jpg`});
              background-size: cover;
              background-repeat: no-repeat;
              width: 100%;
              height: 100%;
              z-index: -1;
            }

            .hero-inner {
              padding-left: env(safe-area-inset-left);
              padding-right: env(safe-area-inset-right);
            }

            .hero .hero-inner .jumbotron {
              padding: 2rem 0 4rem;
              text-align: center;
              color: #fff;
            }

            .hero .hero-inner .jumbotron * {
              margin: 0;
              font-weight: 300;
            }

            .hero .hero-inner .jumbotron p.lead {
              font-size: 1.5rem;
            }

            .hero .hero-inner .jumbotron h1 {
              color: #3e618f;
              font-size: 5rem;
              font-weight: 600;
              line-height: 6rem;
            }

            .hero .hero-inner .jumbotron p.following {
              font-size: 2rem;
            }

            a.goToTop {
              position: fixed;
              left: 1rem;
              bottom: 1rem;
              cursor: pointer;
              width: 50px;
              height: 50px;
              background-color: #3e618f;
              text-indent: -9999px;
              -webkit-border-radius: 60px;
              -moz-border-radius: 60px;
              border-radius: 60px;
              box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1);
              opacity: 1;
            }

            a.goToTop span.arrow {
              position: absolute;
              top: 50%;
              left: 50%;
              margin-left: -8px;
              margin-top: -12px;
              height: 0;
              width: 0;
              border: 8px solid transparent;
              border-bottom-color: transparent;
              border-bottom-color: #ffffff;
              outline: 0;
              box-shadow: inset 0.5px 0.866px 0px 0px rgba(0, 0, 0, 0.75);
            }

            @media (min-width: 768px),
              @media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {
              .container {
                padding: 0;
              }

              .hero .background {
                background-attachment: fixed;
              }

              .hero .hero-inner .jumbotron {
                padding: 4rem 0;
              }

              .hero .hero-inner .jumbotron p.lead {
                font-size: 2rem;
              }

              .hero .hero-inner .jumbotron h1 {
                font-size: 7rem;
              }

              .hero .hero-inner .jumbotron p.following {
                font-size: 2.5rem;
                margin: 1rem 0 0.5rem;
              }
            }
          `}</style>
          <style jsx global>{`
            body {
              font-family: "Arimo", -apple-system, BlinkMacSystemFont,
                "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                "Noto Color Emoji" !important;
            }

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
          `}</style>
        </div>
      </Container>
    );
  }
}

export default withRouter(MyApp);
