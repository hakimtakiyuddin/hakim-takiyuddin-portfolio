import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Hakim | Software Engineer"
        titleTemplate="Hakim | Software Engineer"
        defaultTitle="Hakim | Software Engineer"
        description="Hey! I'm Hakim, An Associate Software Engineer!"
        openGraph={{
          url: "https://www.hakimtakiyuddin.com/",
          title: "Hakim | Software Engineer",
          description: "Hey! I'm Hakim, an Associate Software Engineer",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Hakim Takiyuddin, hakim, Associate Software Engineer, web development, web developer, software engineer, tech enthusiast, open source, Malaysia",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/heliport.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
