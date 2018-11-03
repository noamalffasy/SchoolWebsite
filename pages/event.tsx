import * as React from "react";
import { Component } from "react";

import Head from "next/head";

import ImageView from "../components/ImageView";
import Image from "../components/Image";

import eventsData from "../data/events";

interface Props {
  id: string;
  title: string;
  content: string;
  images: {
    src: string;
    caption: string;
  }[];
}

class Event extends Component<Props> {
  static async getInitialProps({ query: { id } }) {
    let event = { id };

    await Promise.all(
      eventsData.map(eventData => {
        if (eventData.id === id) {
          event = { id, ...eventData };
        }
      })
    );

    return event;
  }

  render() {
    const { title, content, images } = this.props;
    return (
      <div className="container hebrew">
        <Head>
          <title>{title} - קריית החינוך פארק המדע</title>
        </Head>
        <h1>{title}</h1>
        <p>{content}</p>
        <ImageView>
          {images.map((image, i) => {
            return (
              <Image imageSrc={image.src} caption={image.caption} key={i} />
            );
          })}
        </ImageView>
        <style jsx>{`
          a {
            color: #3e618f;
            opacity: 0.65;
            transition: all 0.3s;
          }

          a:hover {
            color: #3e618f;
            opacity: 1;
            text-decoration: none;
          }

          h1 {
            color: #3e618f;
          }

          .hebrew {
            text-align: right;
            direction: rtl;
          }

          .info-section {
            margin: 0 0 2rem;
          }
        `}</style>
      </div>
    );
  }
}

export default Event;
