import React from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

const Doctor = () => {
  return (
    <main className={styles.main}>
      <div className={styles.btn_flex}>
        <Link to={"/createDoctor"}>
          <button className={styles.btn}>Create Doctor</button>
        </Link>
        <Link to={"/getDoctor"}>
          <button className={styles.btn}>Get Doctor</button>
        </Link>
      </div>
    </main>
  );
};

export default Doctor;
