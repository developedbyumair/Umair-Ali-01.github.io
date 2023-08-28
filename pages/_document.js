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
        <meta name="description" content="Umair - Portfolio" />
        {/* title */}
        {/* Favicon */}
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
