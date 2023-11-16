import React from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

const Nurse = () => {
  return (
    <main className={styles.main}>
      <div className={styles.btn_flex}>
        <Link to={"/createNurse"}>
          <button className={styles.btn}>createNurse</button>
        </Link>
        <Link to={"/getNurse"}>
          <button className={styles.btn}>getNurse</button>
        </Link>
      </div>
    </main>
  );
};

export default Nurse;
