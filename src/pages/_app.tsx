import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import type { AppProps } from "next/app";

import { Header } from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
