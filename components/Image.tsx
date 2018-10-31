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
      <div className="image">
        <img src={imageSrc} alt={caption} />
        <p className="caption">{caption}</p>
        <style jsx>{`
          .image {
            margin: 1rem 0.5rem;
          }

          .image img {
            display: block;
            width: 15rem;
            border-radius: 2px;
            margin: 0 auto;
          }

          .image p.caption {
            font-size: 0.85rem;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Image;
