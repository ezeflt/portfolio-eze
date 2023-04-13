import '../styles/globals.css';
import Head from 'next/head';
import '../components/carousel.min.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>          
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <link rel="icon" href="/jquery.png" />
        <title>Ezechiel Felten</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
