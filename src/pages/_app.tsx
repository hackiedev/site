import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body *, body *:before, body *:after {
    box-sizing: border-box;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Hackie.dev</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.41, maximum-scale=1"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default App;
