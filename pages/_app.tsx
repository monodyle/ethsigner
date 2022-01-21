import "@fontsource/inter";
import "~styles/globals.css";
import type { AppProps } from "next/app";
import { SEO } from "~components/seo/seo";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

const getLibrary = (provider: any) => new Web3(provider);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <SEO />
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
