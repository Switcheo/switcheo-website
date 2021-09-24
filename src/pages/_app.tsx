import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import { MainLayout } from "src/components/Layout";
import { theme } from "../theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MuiThemeProvider>
    </>
  );
}

export default MyApp;
