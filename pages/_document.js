import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <meta
        name="description"
        content="Your gateway to explore an amazing World of over 700,000 Movies including overviews, ratings, cast, trends, and more"
      ></meta>
      <meta property="og:image" content="/Images/thumb.jpg" />

      <meta property="og:image:width " content="1920" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:height" content="1080" />
      <title>Pluton | Your Gateway to Another World</title>
      <link rel="icon" href="/Images/favicon.svg" type="image/x-icon"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
