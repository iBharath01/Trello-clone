import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Login from "./auth/login";
import Navbar from "../components/Navbar";
import Board from "../components/Board";


export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.navbar_container}>
        <Navbar />
      </div>
      <div>
        <Board />
      </div>
    </div>
  );
}
