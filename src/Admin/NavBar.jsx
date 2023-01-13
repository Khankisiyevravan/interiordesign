import React from "react";
import { NavLink } from "react-router-dom";
import "../Bootstrap.css";
function NavBar() {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">A</a> */}
          <NavLink to="/admin_panel1" className="nav-link" aria-current="page">
            Control Panel
          </NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">A</a> */}
          <NavLink
            to="/admin_panel/addproduct"
            className="nav-link"
            aria-current="page"
          >
            Add Product
          </NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">B</a> */}
          <NavLink to="/admin_panel/addtype" className="nav-link">
            Add Type
          </NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
          <NavLink to="/admin_panel/addstyle" className="nav-link">
            Add Style
          </NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">A</a> */}
          <NavLink
            to="/admin_panel/additem"
            className="nav-link"
            aria-current="page"
          >
            Add Item
          </NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">A</a> */}
          <NavLink
            to="/admin_panel/addblogitem"
            className="nav-link"
            aria-current="page"
          >
            Add Blog Item
          </NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">A</a> */}
          <NavLink
            to="/admin_panel/addblogcategory"
            className="nav-link"
            aria-current="page"
          >
            Add Blog Category
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
