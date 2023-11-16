import React from 'react'
import styles from "../styles/Home.module.css";
import { Link } from 'react-router-dom';

const Patient = () => {
  return (
    <main className={styles.main}>
    <div className={styles.btn_flex}>
      <Link to={"/createPatient"}>
        <button className={styles.btn}>createPatient</button>
      </Link>
      <Link>
        <button className={styles.btn}>getPatient</button>
      </Link>
    </div>
  </main>
  )
}

export default Patient
