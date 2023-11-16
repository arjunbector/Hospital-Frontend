import React from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

const Doctor = () => {
  return (
    <main className={styles.main}>
      <div className={styles.btn_flex}>
        <Link to={"/createDoctor"}>
          <button className={styles.btn}>createDoctor</button>
        </Link>
        <Link>
          <button className={styles.btn}>getDoctor</button>
        </Link>
      </div>
    </main>
  );
};

export default Doctor;
