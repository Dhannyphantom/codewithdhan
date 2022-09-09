import Head from "next/head";
import styles from "../styles/Home.module.css";
import Cards from "../components/Card/Cards";
import Profile from "../components/Profile/Profile";
import Separator from "../components/Separator/Separator";
import History from "../components/History/History";
import AppProject from "../components/AppProject/AppProject";
import { motion } from "framer-motion";
import { infoVart } from "../app/motion_store";

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
        <motion.section
          initial="from"
          transition={{ staggerChildren: 0.8 }}
          animate="to"
        >
          <motion.h2 variants={infoVart} className={styles.title}>
            Daniel Olojo
          </motion.h2>
          <motion.h2 variants={infoVart} className={styles.title}>
            Full Stack Web & Mobile App Developer
          </motion.h2>
          <motion.h2 variants={infoVart} className={styles.title}>
            Based in Nigeria
          </motion.h2>
        </motion.section>
        <Profile />
        <Cards />
        <Separator />
        <History />
        <AppProject />
      </main>
    </div>
  );
}
