import React, { useState } from "react";
import styles from "../styles/form.module.css";

const CreateNurse = () => {
  const [apiData, setApiData] = useState();
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({
    name: ""
  });
  const handleSubmit = () => {
    fetch("http://localhost:8080/nurses", {
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
  return (
    <main>
      <div className={styles.card}>
        <label>Name</label>
        <input type="text" onChange={handleNameChange} />
      <button className={styles.btn} onClick={handleSubmit}>
        Submit
      </button>
      {showData && <div>
        Nurse #{apiData.id} : {apiData.name} created
      </div>}
      </div>
    </main>
  );
};

export default CreateNurse;
