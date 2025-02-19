import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full antialiased bg-white" lang="no">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/igq2srw.css" />
        <link rel="icon" href="/media/Forsvarsadvokat.svg" />
      </Head>
      <body className="flex flex-col h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
