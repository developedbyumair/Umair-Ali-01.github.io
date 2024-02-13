import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="themepaa" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="Umair - Portfolio" />
        <meta property="og:description" content="Next JS Developer Portfolio" />
        <meta property="og:image" content="/assets/img/Banner.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="436" />
        <meta property="og:image:height" content="228" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/img/Avatar2.png"
          style={{
            borderRadius: "50%",
          }}
        />
        {/* theme css */}
        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
