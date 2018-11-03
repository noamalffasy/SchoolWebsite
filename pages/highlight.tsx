import * as React from "react";
import { Component } from "react";

import Head from "next/head";
import Link from "next/link";

// import ImageView from "../components/ImageView";
// import Image from "../components/Image";
import Card, { CardImage } from "../components/Card";

import highlightsData from "../data/highlights";
import eventsData from "../data/events";

interface ImageInterface {
  src: string;
  caption: string;
}

interface EventInterface {
  id: string;
  image: string;
  title: string;
  desc: string;
  content: string;
  images: ImageInterface[];
}

interface Props {
  id: string;
  title: string;
  content?: {
    title: string;
    content?: string;
  }[];
  Markdown?: string;
  images: ImageInterface[];
  relatedEvents: EventInterface[];
}

class Highlight extends Component<Props> {
  static async getInitialProps({ query: { id } }) {
    let highlight: {
      id: string;
      title?: string;
      desc?:
        | string
        | {
            content: string;
            id: string;
          }[];
      content?: string;
      Markdown?: string;
      relatedEvents?: string[] | EventInterface[];
    } = { id };

    await Promise.all(
      highlightsData.map(highlightData => {
        if (highlightData.id === id) {
          highlight = { id, ...highlightData };
        }
      })
    );

    if (!highlight.content) {
      highlight.Markdown = require(`../data/highlights/${id}.md`).default;
    }

    if (highlight.relatedEvents) {
      const _relatedEvents: string[] = highlight.relatedEvents;
      const relatedEvents = await Promise.all(
        _relatedEvents.map(
          async eventID => eventsData.filter(event => event.id === eventID)[0]
        )
      );

      return { ...highlight, relatedEvents };
    }

    return highlight;
  }

  render() {
    const { title, content, Markdown, relatedEvents } = this.props;
    return (
      <div className="container hebrew">
        <Head>
          <title>{title} - קריית החינוך פארק המדע</title>
        </Head>
        {content ? (
          content.map(content => {
            return (
              <>
                <h1>{content.title}</h1>

                <p>{content.content}</p>
              </>
            );
          })
        ) : (
          <Markdown />
        )}
        {relatedEvents && (
          <>
            <h1>אירועים</h1>
            <div className="events">
              {relatedEvents.map((event, i) => {
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
          </>
        )}
        {/* <h1>{title}</h1>
        <p>{content}</p>
        <ImageView>
          {images.map((image, i) => {
            return (
              <Image imageSrc={image.src} caption={image.caption} key={i} />
            );
          })}
        </ImageView> */}
        <style jsx global>{`
          a {
            color: #3e618f !important;
            opacity: 0.65;
            transition: all 0.3s;
          }

          a:hover {
            color: #3e618f;
            opacity: 1;
            text-decoration: none !important;
          }

          h1,
          h2,
          h3 {
            color: #3e618f;
          }

          .hebrew {
            text-align: right;
            direction: rtl;
          }

          .info-section {
            margin: 0 0 2rem;
          }

          .events {
            display: flex;
            margin: 1rem 0 0 0;
            align-items: center;
            justify-content: center;
            flex-flow: wrap;
          }
        `}</style>
      </div>
    );
  }
}

export default Highlight;
