import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainContainer from "../components/MainContainer";
import ScrollToTopButton from "@components/ScrollToTopButton";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </MainContainer>
  );
}
