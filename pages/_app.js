import Preloader from "@/src/components/Preloader";
import "../styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import { ThemeProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      {/* {loader && <Preloader />} */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
