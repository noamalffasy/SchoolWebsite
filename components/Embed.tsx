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
        <iframe src={embedSrc} />
        <style jsx>{`
          .embed {
            position: relative;
            height: 65vh;
            width: 100%;
            margin: 1rem auto;
            overflow: hidden;
          }

          .embed iframe {
            width: 100%;
            height: 100%;
            border: 0;
          }

          @media (min-width: 992px),
            @media(min-width: 992px) and (-webkit-min-device-pixel-ratio: 1) {
            .embed {
              width: 50vh;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Embed;
