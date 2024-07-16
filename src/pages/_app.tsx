import { StoreProvider } from "@/lib/StoreProvider";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import "./globals.css";
import Layout from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </SessionProvider>
  );
}
