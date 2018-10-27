import * as React from "react";
import { Component } from "react";

interface Props {
  SVG: Element;
  title: string;
}

class Card extends Component<Props> {
  render() {
    const { SVG, title, children } = this.props;
    return (
      <div className="card">
        {SVG}
        <h2>{title}</h2>
        {children}
        <style jsx>{`
          .card {
            text-align: center;
            background: #fbfbfb;
            margin: 0 1rem 3rem;
            padding: 1.5rem 0.5rem;
          }

          .card h2 {
            font-size: 3rem;
          }

          @media (min-width: 768px) {
            .card {
              width: calc((100% * 1 / 2) - (1rem * 2));
            }
          }
        `}</style>
        <style jsx global>{`
          .card svg {
            width: 4rem;
            fill: #000;
          }

          .card p,
          .card a {
            font-weight: 300;
          }

          .card p {
            font-size: 1.5rem;
          }

          .card a {
            font-size: 1.15rem;
          }

          .card a::before {
            content: "< ";
          }
        `}</style>
      </div>
    );
  }
}

export default Card;
