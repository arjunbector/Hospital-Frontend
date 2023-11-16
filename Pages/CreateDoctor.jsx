import React, { useState } from "react";
import styles from "../styles/form.module.css";

const CreateDoctor = () => {
  const handleSubmit = () => {
    fetch("localhost:8080/doctor", {
      Method: "POST",
      Headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      Body :JSON.stringify(data),
      Cache:'default'
    })
    .then(response => response.json())
    .then(data=>{
        console.log(data);
    })
    ;
  };
  const [data, setData] = useState({
    name: "",
    specialty: "",
    yoe: 0,
  });
  const handleNameChange = (event) => {
    setData((prev) => {
      return {
        ...prev,
        name: event.target.value,
      };
    });
    console.log(data);
  };
  const handleSpecChange = (event) => {
    setData((prev) => {
      return {
        ...prev,
        specialty: event.target.value,
      };
    });
    console.log(data);
  };
  const handleYoeChange = (event) => {
    setData((prev) => {
      return {
        ...prev,
        yoe: event.target.value,
      };
    });
    console.log(data);
  };
  return (
    <main>
      <div className={styles.card}>
        <label>Name</label>
        <input type="text" onChange={handleNameChange} />
        <label>Specialty</label>
        <input type="text" onChange={handleSpecChange} />
        <label>Years of experience</label>
        <input type="text" onChange={handleYoeChange} />
      </div>
      <button className={styles.btn} onClick={handleSubmit}>
        Submit
      </button>
    </main>
  );
};

export default CreateDoctor;
