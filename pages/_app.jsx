import '../styles/globals.css';
import Head from 'next/head';
import '../components/carousel.min.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>          
      <meta name="description" content="Portfolio déveloper frontend, Ezechiel Felten portfolio" />
      <link rel="icon" href="/jquery.png" />
        <title>Ezechiel Felten portfolio Developer frontend</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
