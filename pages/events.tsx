import * as React from "react";
import { Component } from "react";

import Head from "next/head";
import Link from "next/link";

import Card, { CardImage } from "../components/Card";

import eventsData from "../data/events";

class Events extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>אירועים - קריית החינוך פארק המדע</title>
        </Head>
        <div className="events">
          {eventsData.map((event, i) => {
            return (
              <Card key={i}>
                <CardImage background={`url("${event.image}")`} />
                <h2>{event.title}</h2>
                <p>{event.desc}</p>
                <Link
                  href={`/event?id=${event.id}`}
                  as={`/events/${event.id}`}
                >
                  <a>קרא עוד</a>
                </Link>
              </Card>
            );
          })}
        </div>
        <style jsx>{`
          .events {
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

export default Events;
