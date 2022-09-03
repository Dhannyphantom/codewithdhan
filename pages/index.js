import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Olojo Daniel Software Dev.</title>
        <meta
          name="description"
          content="Daniel Olojo's portfolio website as a Software Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
