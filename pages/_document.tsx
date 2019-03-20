import Document, { Head, Main, NextScript } from "next/document";

import { ASSET_URL } from "../utils/constants";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="he">
        <Head>
          {/* Metadata */}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no"
          />

          {/* Favicons */}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={`${ASSET_URL}/static/favicons/apple-icon-57x57.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={`${ASSET_URL}/static/favicons/apple-icon-60x60.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={`${ASSET_URL}/static/favicons/apple-icon-72x72.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={`${ASSET_URL}/static/favicons/apple-icon-76x76.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={`${ASSET_URL}/static/favicons/apple-icon-114x114.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={`${ASSET_URL}/static/favicons/apple-icon-120x120.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={`${ASSET_URL}/static/favicons/apple-icon-144x144.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={`${ASSET_URL}/static/favicons/apple-icon-152x152.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${ASSET_URL}/static/favicons/apple-icon-180x180.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={`${ASSET_URL}/static/favicons/android-icon-192x192.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${ASSET_URL}/static/favicons/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={`${ASSET_URL}/static/favicons/favicon-96x96.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${ASSET_URL}/static/favicons/favicon-16x16.png`}
          />
          <link
            rel="shortcut icon"
            href={`${ASSET_URL}/static/favicons/favicon-32x32.ico`}
            type="image/x-icon"
          />
          <link
            rel="manifest"
            href={`${ASSET_URL}/static/favicons/manifest.json`}
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          {/* Fonts */}
          <style jsx>{`
            @font-face {
              font-family: "Arimo";
              font-display: swap;
              font-style: normal;
              font-weight: 400;
              src: local("Arimo Regular"), local("Arimo-Regular"),
                url(https://fonts.gstatic.com/s/arimo/v12/P5sMzZCDf9_T_10UxCFuj5-v6dg.woff2)
                  format("woff2");
              unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
                U+A640-A69F, U+FE2E-FE2F;
            }

            @font-face {
              font-family: "Arimo";
              font-display: swap;
              font-style: normal;
              font-weight: 400;
              src: local("Arimo Regular"), local("Arimo-Regular"),
                url(https://fonts.gstatic.com/s/arimo/v12/P5sMzZCDf9_T_10bxCFuj5-v6dg.woff2)
                  format("woff2");
              unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
