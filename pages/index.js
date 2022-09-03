import Head from "next/head";
import styles from "../styles/Home.module.css";
import Cards from "../components/Card/Cards";
import Profile from "../components/Profile/Profile";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Olojo Software Dev.</title>
        <meta
          name="description"
          content="Daniel Olojo's portfolio website as a Software Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className={styles.title}>
          Daniel Olojo <br /> Full Stack Web & Mobile App Developer <br /> Based
          in Nigeria
        </h2>
        <Profile />
        <Cards />
      </main>
    </div>
  );
}
