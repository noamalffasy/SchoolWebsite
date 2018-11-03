import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const ASSET_URL =
      process.env.NODE_ENV === "production"
        ? "https://noamalffasy.github.io/SchoolWebsite/"
        : "";

    return (
      <html>
        <Head>
          {/* Metadata */}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no"
          />

          {/* CSS */}
          <link
            rel="stylesheet"
            href={`${ASSET_URL}/static/css/bootstrap-grid.min.css`}
          />
          <link
            rel="stylesheet"
            href={`${
              ASSET_URL
            }/static/css/bootstrap-reboot.min.css`}
          />

          {/* Fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Arimo"
          />

          {/* Favicons */}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={`${
              ASSET_URL
            }/static/favicons/apple-icon-57x57.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={`${
              ASSET_URL
            }/static/favicons/apple-icon-60x60.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={`${
              ASSET_URL
            }/static/favicons/apple-icon-72x72.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={`${
              ASSET_URL
            }/static/favicons/apple-icon-76x76.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={`${
              ASSET_URL
            }/static/favicons/apple-icon-114x114.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={`${
              ASSET_URL
            }/static/favicons/apple-icon-120x120.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={`${
              ASSET_URL
            }/static/favicons/apple-icon-144x144.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={`${
              ASSET_URL
            }/static/favicons/apple-icon-152x152.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${
              ASSET_URL
            }/static/favicons/apple-icon-180x180.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={`${
              ASSET_URL
            }/static/favicons/android-icon-192x192.png`}
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
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            body {
              font-family: "Arimo", -apple-system, BlinkMacSystemFont,
                "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                "Noto Color Emoji" !important;
            }

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
          `}</style>
        </body>
      </html>
    );
  }
}

export default MyDocument;
