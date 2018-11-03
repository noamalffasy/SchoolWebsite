import * as React from "react";
import { Component } from "react";

import Head from "next/head";

import { ASSET_URL } from "../utils/constants";

class Quality extends Component {
  render() {
    return (
      <>
        <Head>
          <title>איכות - קריית החינוך פארק המדע</title>
        </Head>
        <img src={`${ASSET_URL}/static/img/quality.png`} />
        <style jsx>{`
          img {
            display: block;
            width: 20rem;
            margin: 0 auto;
          }
        `}</style>
      </>
    );
  }
}

export default Quality;
