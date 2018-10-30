import * as React from "react";
import { Component } from "react";

import Head from "next/head";

import Card, { CardImage } from "../components/Card";

import highlightsData from "../data/highlights";
import eventsData from "../data/events";

class Home extends Component {
  render() {
    const highlights = highlightsData;
    const events = eventsData;

    return (
      <>
        <Head>
          <title>קריית החינוך פארק המדע</title>
        </Head>
        <div className="highlights-outer">
          <h1>מגמות</h1>
          <div className="highlights">
            {highlights.map((highlight, i) => {
              return (
                <Card key={i}>
                  <CardImage background={highlight.iconBackground} svg>
                    {highlight.svg}
                  </CardImage>
                  <h2>{highlight.title}</h2>
                  {highlight.children}
                </Card>
              );
            })}
          </div>
        </div>
        <div className="events-outer">
          <h1>אירועים אחרונים</h1>
          <div className="events">
            {events.map((event, i) => {
              return (
                <Card key={i}>
                  <CardImage background={`url("${event.image}")`} />
                  <h2>{event.title}</h2>
                  {event.children}
                </Card>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          h1 {
            color: #3e618f;
            font-size: 4rem;
            text-align: center;
            margin: 2rem 0 1rem;
          }

          .highlights,
          .events {
            display: flex;
            margin: 1rem 0 0 0;
            align-items: center;
            justify-content: center;
            flex-flow: wrap;
          }
        `}</style>
      </>
    );
  }
}

export default Home;
