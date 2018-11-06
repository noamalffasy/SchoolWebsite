import * as React from "react";
import { Component } from "react";

import Head from "next/head";

import { ASSET_URL } from "../utils/constants";

class Gallery extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>גלריה - קריית החינוך פארק המדע</title>
        </Head>
        <table className="wrapper-table">
          <tbody>
            <tr>
              <td>
                <table className="image-table">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${ASSET_URL}/static/img/gallery/1.jpg)`
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>מגרש הספורט ובניין בית הספר </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table className="image-table">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${ASSET_URL}/static/img/gallery/2.jpg)`
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>מגרש הספורט של בית הספר</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table className="image-table">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${ASSET_URL}/static/img/gallery/3.jpg)`
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>בניין בית הספר מלמטה</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className="image-table">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${ASSET_URL}/static/img/gallery/4.jpg)`
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>בניין בית הספר מזווית שונה</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table className="image-table">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${ASSET_URL}/static/img/gallery/5.jpg)`
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>מעבדת רפואה</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table className="image-table">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${ASSET_URL}/static/img/gallery/6.jpg)`
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>מזכירות בית הספר</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className="image-table">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${ASSET_URL}/static/img/gallery/7.jpg)`
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>הדפסת תלת מימד</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table className="image-table">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${ASSET_URL}/static/img/gallery/8.jpg)`
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>כיתת סייבר עובדת</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table className="image-table">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${ASSET_URL}/static/img/gallery/9.jpg)`
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>כיתת רפואה בעבודה</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className="image-table">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${ASSET_URL}/static/img/gallery/10.jpg)`
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>כיתת רפואה ביחד עם מד"א</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table className="image-table">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${ASSET_URL}/static/img/gallery/11.jpg)`
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>מבט אווירי על בית הספר</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <style jsx>{`
          table {
            width: 100%;
          }

          table.wrapper-table {
            margin: 0 auto;
          }

          table.wrapper-table > tbody > tr > td {
            display: inline-block;
            width: 100%;
            margin: 0.5rem 0;
          }

          table.image-table tr td p {
            text-align: center;
          }

          table tr td .image {
            display: block;
            background-size: cover;
            background-position: center center;
            width: 100%;
            height: 15rem;
            border-radius: 2px;
            margin: 0 auto;
          }

          @media (min-width: 576px) {
            table.wrapper-table > tbody > tr > td {
              width: calc(100% * (1 / 3) - (0.5rem * 2));
              margin: 0.5rem;
            }

            table tr td .image {
              height: 10rem;
            }
          }

          @media (min-width: 768px) {
            table tr td .image {
              height: 15rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Gallery;
