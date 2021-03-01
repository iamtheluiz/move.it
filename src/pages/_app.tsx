import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Pomodoro with levels!" />
        <meta name="keywords" content="Pomodoro" />
        <title>Move.it</title>

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5965E0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
