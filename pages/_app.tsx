import * as React from "react";

import App, { Container } from "next/app";
import { withRouter, SingletonRouter } from "next/router";

import Navbar from "../components/Navbar";
// import WixEditor from "../components/WixEditor";

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
    const { Component, pageProps } = this.props;

    return (
      <Container>
        {/* <WixEditor /> */}
        <div className="container">
          <Navbar router={this.props.router} />
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}

export default withRouter(MyApp);
