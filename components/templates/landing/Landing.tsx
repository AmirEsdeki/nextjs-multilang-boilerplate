import Head from "next/head";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./Home.module.css";

export default function Landing() {
  const { t } = useTranslation("landing");
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [showSearchResultBox, setShowSearchResultBox] =
    useState<boolean>(false);

  return (
    <div
      id={styles.mainBg}
      className="bg-fixed bg-center bg-no-repeat bg-cover h-screen"
    >
      <div id={styles.blackBgLayer}>
        <Head>
          <title>{t("pageName")}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>Hello World</h1>
        </main>
      </div>
    </div>
  );
}
