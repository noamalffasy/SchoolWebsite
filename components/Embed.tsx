import * as React from "react";
import { Component } from "react";

interface Props {
  embedSrc: string;
}

class Embed extends Component<Props> {
  render() {
    const { embedSrc } = this.props;
    return (
      <div className="embed">
        <a href={embedSrc}>
          <img
            src="https://static.wixstatic.com/media/f6b4ac956a6e4672949bbb24228440a8.png/v1/fill/w_176,h_176,al_c,lg_1/f6b4ac956a6e4672949bbb24228440a8.png"
            alt="PDF"
          />
        </a>
        <iframe src={embedSrc} />
        <style jsx>{`
          .embed {
            position: relative;
            width: 100%;
            margin: 1rem auto;
            overflow: hidden;
          }

          .embed a {
            height: 4rem;
            width: 4rem;
            display: block;
            margin: 0 auto;
            opacity: 1;
          }

          .embed a img {
            height: 100%;
            width: 100%;
          }

          .embed iframe {
            display: none;
            width: 100%;
            height: 100%;
            border: 0;
          }

          @media (min-width: 992px),
            @media(min-width: 992px) and (-webkit-min-device-pixel-ratio: 1) {
            .embed {
              width: 50vh;
              height: 65vh;
            }

            .embed iframe {
              display: block;
            }

            .embed a {
              display: none;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Embed;
