import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import AboutAPI from "../../../APIs/aboutAPI/AboutAPI";
import styles from "./About.module.css";

export default function About() {
  const { t, i18n } = useTranslation();
  const hRef = useRef(null);
  return (
    <div
      id={styles.mainBg}
      className="bg-fixed bg-center bg-no-repeat bg-cover h-screen"
    >
      <Head>
        <title>Esdeki.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1
        ref={hRef}
        onClick={() => {
          console.log(hRef.current);
        }}
      >
        Hii
      </h1>
    </div>
  );
}
