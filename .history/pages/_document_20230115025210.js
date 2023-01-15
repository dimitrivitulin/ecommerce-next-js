import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel ="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
<link rel="preconnect" href="https://cdn.snipcart.com" />
<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />

      </Head>
      <body>
        <Main />
        <NextScript />
        <script  async src="http://cdn.snipcart.com/themes/v.3.3.1/default/snipcart.js"/>
        <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}/>
      </body>
    </Html>
  )
}
