import '../styles/globals.css';
import Head from 'next/head';
import '../components/carousel.min.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>          
      <meta name="description" content="Portfolio déveloper frontend, Ezechiel Felten portfolio" />
      <link rel="icon" href="https://res.cloudinary.com/db9qvgg30/image/upload/v1682386634/EF1_w4tjnw.png" />
        <title>Ezechiel Felten portfolio Developer frontend</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
