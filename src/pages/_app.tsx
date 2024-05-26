import { StoreProvider } from "@/lib/StoreProvider";
import type { AppProps } from "next/app";
import "./globals.css";
import Layout from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </Layout>
  );
}
