import Head from "next/head";

const SEO_CONFIG = {
  title: "EthSigner",
  description: "Your Ethereum Web3 signature debugger",
};

export const SEO = () => {
  return (
    <Head>
      <title>{SEO_CONFIG.title}</title>
      <meta name="description" content={SEO_CONFIG.description} />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};
