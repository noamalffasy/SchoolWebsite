import * as React from "react";
import { Component } from "react";

class Card extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="card">
        {children}
        <style jsx>{`
          .card {
            text-align: center;
            background: #fbfbfb;
            margin: 0 1rem 3rem;
            padding: 1.5rem 0.5rem;
          }

          @media (min-width: 768px) {
            .card {
              width: calc((100% * 1 / 2) - (1rem * 2));
            }
          }
        `}</style>
        <style jsx global>{`
          .card h2 {
            font-size: 3rem;
          }

          .card svg {
            height: 5rem;
            width: 6rem;
          }

          .card p,
          .card a {
            font-weight: 300;
          }

          .card > p {
            font-size: 1.5rem;
          }

          .card > a {
            font-size: 1.15rem;
          }

          .card a::before {
            content: "< ";
          }

          .card .sub-category {
            margin: 0 0 0.5rem;
          }

          .card .sub-category p {
            margin: 0 0 0.2rem;
          }
        `}</style>
      </div>
    );
  }
}

interface CardImageProps {
  background: string;
  svg?: boolean;
}
export class CardImage extends Component<CardImageProps> {
  render() {
    const { children, background, svg } = this.props;
    return (
      <div className="image">
        {children}
        <style jsx>{`
          .image {
            display: flex;
            max-width: 70%;
            height: ${svg ? "12rem" : "0"};
            margin: 0 auto 1rem;
            padding: 2.5rem 1rem ${svg ? "2.5rem" : "70%"};
            border-radius: 0.3rem;
            background: ${background};
            background-size: cover;
            background-position: center center;
            box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1);
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Card;
