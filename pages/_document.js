import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <meta property="og:image" content="/Images/thumpnail.PNG" />

      <meta property="og:image:width " content="1914" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:height" content="860" />
      <title>Übermensch | Your Gateway to Anther World</title>
      <link rel="icon" href="/Images/favicon.svg" type="image/x-icon"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
