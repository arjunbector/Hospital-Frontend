import React, { useState } from "react";
import styles from "../styles/form.module.css";

const CreatePatient = () => {
  const [apiData, setApiData] = useState();
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({
    name: "",
    doctorId:0,
    nurseId:0,
    disease:"",
    medication:""
  });
  const handleSubmit = () => {
    fetch("http://localhost:8080/patients", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setShowData(true)
      });
  };

  const handleNameChange = (event) => {
    setData((prev) => {
      return {
        ...prev,
        name: event.target.value,
      };
    });
  };
  const handleDocIDChange = (event) => {
    setData((prev) => {
      return {
        ...prev,
        doctorId: Number(event.target.value),
      };
    });
  };
  const handleNurseIDChange = (event) => {
    setData((prev) => {
      return {
        ...prev,
        nurseId: Number(event.target.value),
      };
    });
    console.log(data);
  };
  const handleDiseaseIDChange = (event) => {
    setData((prev) => {
      return {
        ...prev,
        disease: event.target.value,
      };
    });
    console.log(data);
  };
  const handleMedIDChange = (event) => {
    setData((prev) => {
      return {
        ...prev,
        medication: event.target.value,
      };
    });
    console.log(data);
  };
  return (
    <main>
      <div className={styles.card}>
        <label>Name</label>
        <input type="text" onChange={handleNameChange} />
        <label>Doctor ID</label>
        <input type="text" onChange={handleDocIDChange} />
        <label>Nurse ID</label>
        <input type="text" onChange={handleNurseIDChange} />
        <label>Disease</label>
        <input type="text" onChange={handleDiseaseIDChange} />
        <label>Medication</label>
        <input type="text" onChange={handleMedIDChange} />
      <button className={styles.btn} onClick={handleSubmit}>
        Submit
      </button>
      {showData && <div>
        Patient #{apiData.id} : {apiData.name} created
      </div>}
      </div>
    </main>
  );
};

export default CreatePatient;
