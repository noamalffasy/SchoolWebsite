import * as React from "react";
import { Component } from "react";

class ImageView extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="imageView">
        {children}
        <style jsx>{`
          .imageView {
            display: flex;
            margin: 1rem auto 2rem;
            max-width: 80%;
            justify-content: center;
            flex-wrap: wrap;
          }

          @media (min-width: 768px),
            @media (min-width: 768px) and (-webkit-min-device-pixel: 1) {
            .imageView {
              max-width: 90%;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default ImageView;
