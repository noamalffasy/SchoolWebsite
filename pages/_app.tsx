import * as React from "react";

import App, { Container } from "next/app";
import { withRouter, SingletonRouter } from "next/router";

import Navbar from "../components/Navbar";
import WixEditor from "../components/WixEditor";

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

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <WixEditor />
        <div className="main">
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
          <style jsx>{`
            .hero {
              position: relative;
              min-height: 80vh;
              background: rgba(62, 97, 143, 0.15);
              padding: 0 0 2rem;
            }

            .hero .background {
              position: absolute;
              background-color: rgba(255,255,255,1);
              background-image: url("/static/img/heroImage.jpg");
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
              padding: 4rem 0;
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

            @media (min-width: 768px) and (-moz-device-pixel-ratio: 1),
              @media (min-width: 768px) and (-o-device-pixel-ratio: 1),
              @media (min-width: 768px) and (-webkit-device-pixel-ratio: 1) {
              .hero .background {
                background-attachment: fixed;
              }
            }

            @media (min-width: 768px),
              @media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {
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
        </div>
      </Container>
    );
  }
}

export default withRouter(MyApp);
