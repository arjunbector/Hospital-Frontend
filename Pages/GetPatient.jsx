import React from "react";
import { useState } from "react";
import styles from "../styles/form.module.css";

const GetPatient = () => {
  const [id, setId] = useState("");
  const [apiData, setApiData] = useState(null);
  const handleSubmit = () => {
    fetch(`http://localhost:8080/patients/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      });
  };
  const handleChange = (event) => {
    setId(event.target.value);
    console.log(id);
  };
  return (
    <main className={styles.card}>
      <label htmlFor="">Enter Patient ID</label>
      <input type="text" onChange={handleChange} value={id} />
      <button className={styles.btn} onClick={handleSubmit}>
        submit
      </button>
      {apiData && (
        <div className={styles.data}>
          <p>Name : {apiData.name}</p>
          <p>Doctor ID : {apiData.doctorId}</p>
          <p>Nurse ID : {apiData.nurseId}</p>
          <p>Disease: {apiData.disease}</p>
          <p>Medication : {apiData.medication}</p>
        </div>
      )}
    </main>
  );
};

export default GetPatient;
