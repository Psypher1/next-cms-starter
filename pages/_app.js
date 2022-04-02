import Head from "next/head";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title}</title>
      </Head>
      <Header />
      <div className="max-w-4xl mx-auto my-8">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
