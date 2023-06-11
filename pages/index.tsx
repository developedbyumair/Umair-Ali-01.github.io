import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Image from "next/image";
import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  React.useEffect(() => {
    console.log("useEffect");
    // @ts-ignore
    document.querySelector("body").classList.add("dark");
  }, []);
  return (
    <>
      <div className="devman_tm_all_wrap" data-magic-cursor="show">
        <Head>
          <title>Umair | Home</title>
        </Head>
        <Header />
      </div>
    </>
  );
}
