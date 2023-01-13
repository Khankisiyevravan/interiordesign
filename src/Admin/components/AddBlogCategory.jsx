import React, { useState } from "react";
import NavBar from "../NavBar";

function AddBlogCategory() {
  const [blogCategories, setBlogCategories] = useState({
    blogCategoryName: "",
  });
  const handleInput = (e) => {
    setBlogCategories((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitButton = (e)=>{
    e.preventDefault();
    fetch("http://localhost:7732/blogCategories",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(blogCategories),
    })
  }
  return (
    <div>
      <NavBar />
      <div className="navss">
        <label>
          <p>Blog</p>
          <input
            type="text"
            id="blogCategory"
            name="blogCategoryName"
            onChange={(e) => handleInput(e)}
          />
        </label>
        <button 
        className="btn1"
        onClick={(e)=>submitButton(e)}
        >
          Yadda saxla
        </button>
      </div>
    </div>
  );
}

export default AddBlogCategory;
