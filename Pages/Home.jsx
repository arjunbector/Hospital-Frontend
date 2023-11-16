import { Link } from "react-router-dom";
import React from "react";
import styles from "../styles/Home.module.css";
const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>Welcome to the hospital system</h1>
        <div className={styles.btn_flex}>
          <Link to={"/doctor"}>
            <button className={styles.btn}>Doctor</button>
          </Link>
          <Link to={"/patient"}>
            <button className={styles.btn}>Patient</button>
          </Link>
          <Link to={"/nurse"}>
            <button className={styles.btn}>Nurse</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export { Home };
