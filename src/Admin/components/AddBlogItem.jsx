import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
function AddBlogItem() {
  const date = new Date();
  const [blogCategories, setBlogCategories] = useState([]);
  const [popular, setPopular] = useState(false);
  const [blogDetails, setBlogDetails] = useState({
    blogName: "",
    blogDate: [date.getFullYear(), date.getMonth(), date.getDate()],
    blogImage: "",
    blogOverview: "",
    blogShortOverview: "",
    upload: "",
    blogCategory: "1",
    author:"",
    popular: popular,
  });
  useEffect(() => {
    const getBlogCategories = async () => {
      let dataBlogCategories = await fetch(
        "http://localhost:7732/blogCategories"
      ).then((a) => a.json());
      setBlogCategories(dataBlogCategories);
    };
    getBlogCategories();
  }, []);
  const handleInput = (e) => {
    console.log(new Date());
    setBlogDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitButton = (e) => {
    e.preventDefault();
    console.log(blogDetails);
    fetch(" http://localhost:7732/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogDetails),
    });
  };
  const handleUpload = (e) => {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log(reader.result);
      setBlogDetails({ ...blogDetails, [e.target.name]: reader.result });
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <NavBar />
      <div className="navss">
        <label>
          <p>Blog başlığı</p>
          <input
            type="text"
            id="blogName"
            name="blogName"
            onChange={(e) => handleInput(e)}
          />
        </label>
        {/* <label>
          <p>Blog tarixi</p>
          <input
            type="date"
            id="blogDate"
            name="blogDate"
            onChange={(e) => handleInput(e)}
          />
        </label> */}
        <label>
          <p>Blog sekili url</p>
          <input
            type="text"
            id="blogImage"
            name="blogImage"
            onChange={(e) => handleInput(e)}
          />
        </label>
        <label>
          <p>
            Blog qisa
            <br /> mezmun
          </p>
          <textarea
            onChange={(e) => handleInput(e)}
            name="blogShortOverview"
          ></textarea>
        </label>
        <label>
          <p>Blog haqqinda</p>
          <textarea
            onChange={(e) => handleInput(e)}
            name="blogOverview"
          ></textarea>
        </label>
        <label>
          <p>Upload</p>
          <input
            type="file"
            id="upload"
            name="upload"
            onChange={(e) => handleUpload(e)}
          />
        </label>
        <label>
          <p>Yazar</p>
          <input
            type="text"
            id="author"
            name="author"
            onChange={(e) => handleInput(e)}
          />
        </label>
        <label>
          <p>Yazar Şəkli</p>
          <input
            type="file"
            id="upload"
            name="authorImage"
            onChange={(e) => handleUpload(e)}
          />
        </label>
        <label>
          <p>
            Blogun <br /> categoriyasi
          </p>
          <select
            defaultValue="1"
            name="blogCategory"
            id=""
            onChange={(e) => handleInput(e)}
          >
            {blogCategories.map((blogCategory) => (
              <option key={blogCategory.id} value={blogCategory.id}>
                {blogCategory.blogCategoryName}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Popular Blog :</p>
          <label htmlFor="">
            Beli
            <input
              name="popular"
              type="radio"
              value={true}
              onClick={(e) => handleInput(e)}
            />
          </label>
          <label htmlFor="">
            Xeyr
            <input
              name="popular"
              type="radio"
              value={false}
              onClick={(e) => handleInput(e)}
            />
          </label>
        </label>
        <button className="btn1" onClick={(e) => submitButton(e)}>
          Yadda saxla
        </button>
      </div>
    </>
  );
}

export default AddBlogItem;
