import React from "react";
import NavBar from "../NavBar";
import { useState } from "react";
function AddType() {
  const [type, setType] = useState({
    name: "",
    image: "",
    navLink: "",
  });
  const submitButton = (e) => {
    e.preventDefault();
    fetch("http://localhost:7732/type", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(type),
    });
  };
  return (
    <>
      <NavBar />
      <div className="navss">
        {/* <div className="inputs"> */}
        <label>
          Çeşid əlavə edin :
          <input
            onChange={(e) =>
              setType({ ...type, [e.target.name]: e.target.value })
            }
            id="style"
            type="text"
            name="name"
            placeholder="Modern..."
          />
        </label>
        <label>
          Şəkil linki elave et :
          <input
            onChange={(e) =>
              setType({ ...type, [e.target.name]: e.target.value })
            }
            id="style"
            type="text"
            name="image"
            placeholder="http://image.com..."
          />
        </label>
        <label>
          Path elave et :
          <input
            onChange={(e) =>
              setType({ ...type, [e.target.name]: e.target.value })
            }
            id="style"
            type="text"
            name="navLink"
            placeholder="./src/component"
          />
        </label>
        {/* </div> */}
        <button className="btn1" onClick={submitButton}>
          Yadda saxla
        </button>
      </div>
    </>
  );
}

export default AddType;
