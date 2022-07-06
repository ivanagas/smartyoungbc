import Head from 'next/head'

export default function Header() {
  return (
    <>
      <Head>
        <title>Smart Young BC</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Ian Vanagas" />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.smartyoungbc.com/" />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Smart Young BC"/>
        <meta property="og:description" content="Smart Young BC: A Vision for the Future of BC."/>
        <meta property="og:image" content="https://www.smartyoungbc.com/cover.jpg"/>

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="smartyoungbc.com"/>
        <meta property="twitter:url" content="https://www.smartyoungbc.com/"/>
        <meta name="twitter:title" content="Smart Young BC"/>
        <meta name="twitter:description" content="Smart Young BC: A Vision for the Future of BC."/>
        <meta name="twitter:image" content="https://www.smartyoungbc.com/cover.jpg"/>
      </Head>
    </>
  )
}
