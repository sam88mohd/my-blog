import "../styles/globals.css";
import SEOProvider from "./components/context/SEOContext";
import Layout from "./components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <SEOProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SEOProvider>
  );
}

export default MyApp;
