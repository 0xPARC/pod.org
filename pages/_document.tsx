import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" href="/images/logos/pod.svg" />
        <link rel="shortcut icon" type="image/svg" href="/images/logos/pod.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
