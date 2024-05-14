import type { AppProps } from "next/app";
import { Layout } from "./Layout";
import { StoreProvider } from "./StoreProvider";
import "./globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </Layout>
  );
}
