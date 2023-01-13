import React from "react";
import NavBar from "../NavBar";
import { useState } from "react";
function AddItem() {
  const [item, setItem] = useState({
    itemName: "",
    itemImage: "",
    itemUpload: "",
    itemPrice: "",
    dimensions: "",
    color: "",
    material: "",
    instructions: "",
    overview: "",
    country: "",
  });
  const submitButton = (e) => {
    e.preventDefault();
    fetch("http://localhost:7732/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
  };
  const inputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleUpload = (e) => {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log(reader.result);
      setItem({ ...item, [e.target.name]: reader.result });
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <NavBar />
      <div className="navss">
        <label>
          Item əlavə et :
          <input type="text" name="itemName" onChange={inputChange} />
        </label>
        <label>
          Item şəklinin linki :
          <input type="text" name="itemImage" onChange={inputChange} />
        </label>
        <label>
          Item şəklini  :
          <input type="file" multiple name="itemUpload" onChange={handleUpload} />
        </label>
        <label>
          Item qiyməti :
          <input type="text" name="itemPrice" onChange={inputChange} />
        </label>
        <label>
          Ölçülərini:
          <input type="text" name="dimensions" onChange={inputChange} />
        </label>
        <label>
          Rəng:
          <input type="text" name="color" onChange={inputChange} />
        </label>
        <label>
          Material:
          <input type="text" name="material" onChange={inputChange} />
        </label>
        <label>
          Ölkə:
          <input type="text" name="country" onChange={inputChange} />
        </label>
        <label>
          <p>Təlimat :</p>
          <textarea
            name="instructions"
            cols="30"
            rows="5"
            onChange={inputChange}
          ></textarea>
        </label>
        <label>
          <p>Haqqinda :</p>
          <textarea
            name="overview"
            cols="30"
            rows="5"
            onChange={inputChange}
          ></textarea>
        </label>
        <button className="btn1" onClick={submitButton}>
          Yadda saxla
        </button>
      </div>
    </>
  );
}

export default AddItem;
