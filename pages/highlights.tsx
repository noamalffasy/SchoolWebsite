import * as React from "react";
import { Component } from "react";

import Head from "next/head";
import Link from "next/link";

import Card, { CardImage } from "../components/Card";

import categoriesData from "../data/categories";

import { ASSET_URL } from "../utils/constants";

class Highlights extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>מגמות - קריית החינוך פארק המדע</title>
        </Head>
        <div className="highlights">
          {categoriesData.map((category, i) => {
            return (
              <Card key={i}>
                <CardImage background={category.iconBackground} svg>
                  {category.svg}
                </CardImage>
                <h2>{category.title}</h2>
                {typeof category.desc === "string" ? (
                  <>
                    <p>{category.desc}</p>
                    <Link
                      href={`/highlight?id=${category.id}`}
                      as={`${ASSET_URL}/highlights/${category.id}`}
                    >
                      <a>קרא עוד</a>
                    </Link>
                  </>
                ) : (
                  category.desc.map((category, i) => {
                    return (
                      <div className="sub-category" key={i}>
                        <p>{category.content}</p>
                        <Link
                          href={`/highlight?id=${category.id}`}
                          as={`${ASSET_URL}/highlights/${category.id}`}
                        >
                          <a>קרא עוד</a>
                        </Link>
                      </div>
                    );
                  })
                )}
              </Card>
            );
          })}
        </div>
        <style jsx>{`
          .highlights {
            display: flex;
            margin: 1rem 0 0 0;
            align-items: center;
            justify-content: center;
            flex-flow: wrap;
            flex-direction: row-reverse;
          }
        `}</style>
      </div>
    );
  }
}

export default Highlights;
