import * as React from "react";
import { Component } from "react";

interface Props {
  imageSrc: string;
  caption: string;
}

class Image extends Component<Props> {
  render() {
    const { imageSrc, caption } = this.props;
    return (
      <div className="image-outer">
        <div className="image" />
        <p className="caption">{caption}</p>
        <style jsx>{`
          .image-outer {
            margin: 1rem 0.5rem;
          }

          .image-outer .image {
            display: block;
            background: url("${imageSrc}");
            background-size: cover;
            background-position: center center;
            width: 15rem;
            height: 15rem;
            border-radius: 2px;
            margin: 0 auto;
          }

          .image-outer p.caption {
            font-size: 0.85rem;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Image;
