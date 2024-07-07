import Head from "next/head";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import AuthProvider from "@src/shared/provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rammettoOne = localFont({
  src: [
    { path: "./fonts/rammetto-one/rammettoOne-Regular.ttf", weight: "400" },
  ],
  variable: "--font-rammetto-one",
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <main className={rammettoOne.className}>
      <Head>
        <title>Baby Toshi</title>
        <meta
          name="description"
          content="Wassup, i’m Baby Toshi you probably know my dad, the face of Base."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/btoshicto_bete.svg" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </QueryClientProvider>
    </main>
  );
}