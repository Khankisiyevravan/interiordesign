import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
function Head() {
  const [types, setTypes] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const getTypes = async () => {
      const dataTypes = await fetch("http://localhost:7732/type").then((a) =>
        a.json()
      );
      setTypes(dataTypes);
    };
    getTypes();
  }, []);
  const headerRef = useRef();
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (!headerRef.current) return;
      if (window.scrollY > 400) {
        headerRef.current.classList.add("scroll");
      } else {
        headerRef.current.classList.remove("scroll");
      }
    });
  }, []);
  useEffect(() => {
    console.log(location);
    if (
      location.pathname == "/blog/all" ||
      location.pathname.includes("/blog/")
    ) {
      headerRef.current.style.backgroundColor = "#070b14";
    }
  }, [location]);
  const navbar = useRef();
  const closeHeader = () => {
    if (window.innerWidth < 768) {
      navbar.current.style.transform = "translateX(-180%)";
    }
  };
  const openHeader = () => {
    if (window.innerWidth < 768) {
      navbar.current.style.transform = "translateX(0)";
    }
  };
  const openDropdown = (e) => {
    if (window.innerWidth < 768) {
      e.target.closest("li").querySelector(".open").classList.toggle("drop");
    }
  };

  return (
    <header ref={headerRef}>
      <div className="container">
        <div>
          <div onClick={(e) => openHeader(e)} id="navbar-icon">
            <i class="fa-thin fa-bars"></i>
          </div>
          <NavLink to="/" id="logo">
            <img src="../../imgs/logo-main.png" alt="" />
          </NavLink>
        </div>
        <ul ref={navbar}>
          <li id="x" onClick={(e) => closeHeader(e)}>
            <i class="fa-light fa-x"></i>
          </li>
          <li>
            <NavLink to="/">Baş səhifə</NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/design_ideas">
              Dizayn ideaları{" "}
              <i
                className="fa-solid fa-angle-down"
                onClick={(e) => openDropdown(e)}
              ></i>
            </NavLink>
            <ul className="open">
              {types.length > 0
                ? types.map((type) => (
                    <li key={type.id}>
                      <NavLink to={`${type.navLink}`}>
                        {type.name} dizaynı
                      </NavLink>
                    </li>
                  ))
                : ""}
            </ul>
          </li>
          <li>
            <NavLink to="/contact_us"> Əlaqə</NavLink>
          </li>
          {/* <li>
            <NavLink to="/before_after">Before&After</NavLink>
          </li>
          <li className="dropdownh">
            <NavLink to="/packets">Paketlər</NavLink>
            <ul className="open">
              <li>
                <NavLink to="/packets/packet1">Packet1</NavLink>
              </li>
              <li>
                <NavLink to="/packets/packet2">Packet2</NavLink>
              </li>
              <li>
                <NavLink to="/packets/packet3">Packet3</NavLink>
              </li>
            </ul>
          </li> */}
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about_us">Haqqimizda</NavLink>
          </li>
        </ul>
        <div id="header-items">
          {/* <NavLink id="search-icon" to="/">
            <i class="fa-regular fa-magnifying-glass"></i>
          </NavLink> */}
          <NavLink to="/basket" id="shopping-icon">
            <i class="fa-light fa-cart-shopping"></i>
            {/* <img src="/imgs/shopping-cart.png" alt="" /> */}
          </NavLink>
          <NavLink to="/login" id="account">
            <i className="fa-solid fa-right-to-bracket"></i>
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Head;
