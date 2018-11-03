import * as React from "react";
import { Component } from "react";

import Head from "next/head";
import Link from "next/link";

import Card, { CardImage } from "../components/Card";

import categoriesData from "../data/categories";
import eventsData from "../data/events";

import { ASSET_URL } from "../utils/constants";

class Home extends Component {
  render() {
    const categories = categoriesData;
    const events = eventsData;

    return (
      <div className="container">
        <Head>
          <title>קריית החינוך פארק המדע</title>
        </Head>
        <div className="categories-outer">
          <h1>מגמות</h1>
          <div className="categories">
            {categories.map((category, i) => {
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
        </div>
        <div className="events-outer">
          <h1>אירועים אחרונים</h1>
          <div className="events">
            {events.slice(0, 2).map((event, i) => {
              return (
                <Card key={i}>
                  <CardImage background={`url("${event.image}")`} />
                  <h2>{event.title}</h2>
                  <p>{event.desc}</p>
                  <Link
                    href={`/event?id=${event.id}`}
                    as={`${ASSET_URL}/events/${event.id}`}
                  >
                    <a>קרא עוד</a>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          h1 {
            color: #3e618f;
            font-size: 3rem;
            text-align: center;
            margin: 2rem 0 1rem;
          }

          .categories,
          .events {
            display: flex;
            margin: 1rem 0 0 0;
            align-items: center;
            justify-content: center;
            flex-flow: wrap;
            flex-direction: row-reverse;
          }

          @media (min-width: 768px) {
            h1 {
              font-size: 4rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
