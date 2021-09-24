import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
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
      <DefaultSeo
        openGraph={{
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
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
