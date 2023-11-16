import React, { useState } from "react";
import styles from "../styles/form.module.css";

const CreateDoctor = () => {
  const [apiData, setApiData] = useState();
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({
    name: "",
    specialty: "",
    yoe: 0,
  });
  const handleSubmit = () => {
    fetch("http://localhost:8080/doctors", {
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
        yoe: Number(event.target.value),
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
      <button className={styles.btn} onClick={handleSubmit}>
        Submit
      </button>
      {showData && <div>
        Doctor #{apiData.id} : {apiData.name} created
      </div>}
      </div>
    </main>
  );
};

export default CreateDoctor;
