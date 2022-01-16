import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../Components/Layout/Layout";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  <Head>
    <title>Übermensch | Your Gateway to Anther World</title>
  </Head>;
  return (
    <ChakraProvider>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
