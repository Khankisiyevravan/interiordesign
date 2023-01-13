// import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import ReactPaginate from "react-paginate";
// import Head from "../../components/Head";
// function Living() {
//   const [typeData, setTypeData] = useState([]);
//   const [styleData, setStyleData] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [checkData, setCheckData] = useState([]);
//   const [filterStyle, setFilterStyle] = useState([]);
//   const [filterType, setFilterType] = useState([]);
//   const [filterSize, setFilterSize] = useState([]);
//   const [show, setShow] = useState(false);
//   const filterRefType = useRef();
//   const filterRefStyle = useRef();
//   const filterRefAll = useRef();
//   useEffect(() => {
//     const getData = async () => {
//       let data = await fetch("http://localhost:7732/furniture").then((a) =>
//         a.json()
//       );
//       // console.log(data);
//       setProducts(data.filter((f) => f.type == "1"));
//     };
//     getData();
//     const getStyle = async () => {
//       let data = await fetch("http://localhost:7732/style").then((b) =>
//         b.json()
//       );
//       setStyleData(data);
//     };
//     getStyle();
//     const getTypeData = async () => {
//       let data = await fetch("http://localhost:7732/type").then((c) =>
//         c.json()
//       );
//       setTypeData(data);
//     };
//     getTypeData();
//     const getItemData = async () => {
//       let data = await fetch(" http://localhost:7732/item").then((a) =>
//         a.json()
//       );
//       // console.log(data);
//     };
//     getItemData();
//   }, []);
//   useEffect(() => {
//     setCheckData([...products]);
//   }, [products]);
//   const checkStyle = (e) => {
//     if (e.target.checked) {
//       setFilterStyle([...filterStyle, e.target.getAttribute("data-style")]);
//       // setCheckData([...filter,products.filter((f)=>f.style==e.target.getAttribute('data'))]);
//       // console.log(e.target.getAttribute("data-style"));
//     } else {
//       setFilterStyle(
//         filterStyle.filter((f) => f !== e.target.getAttribute("data-style"))
//       );
//       // setFilter(products.filter((f)=>f.style!==e.target.getAttribute('data')))
//     }
//   };
//   const checkType = (e) => {
//     if (e.target.checked) {
//       // e.preventDefault();
//       setFilterType([...filterType, e.target.getAttribute("data-type")]);
//     } else {
//       setFilterType(
//         filterType.filter((f) => f !== e.target.getAttribute("data-type"))
//       );
//     }
//   };
//   const checkSize = (e) => {
//     if (e.target.checked) {
//       // e.preventDefault();
//       setFilterSize([...filterSize, e.target.getAttribute("data-size")]);
//     } else {
//       setFilterSize(
//         filterSize.filter((f) => f !== e.target.getAttribute("data-size"))
//       );
//     }
//   };
//   const filterFuncType = () => {
//     filterRefType.current.classList.toggle("drop");
//     hid2.current.classList.toggle("active");
//     // filterRefType.current.style.display === "block"
//     //   ? (filterRefType.current.style.display = "none")
//     //   : (filterRefType.current.style.display = "block");
//   };
//   const filterFuncAll = () => {
//     filterRefAll.current.classList.toggle("drop");
//     hidden3.current.classList.toggle("active");
//   };
//   const filterFuncStyle = () => {
//     filterRefStyle.current.classList.toggle("drop");
//     hid.current.classList.toggle("active");

//     // filterRefStyle.current.style.display === "block"
//     //   ? (filterRefStyle.current.style.display = "none")
//     //   : (filterRefStyle.current.style.display = "block");
//   };
//   const mouseOut = () => {
//     // console.log("salam");
//     filterRefStyle.current.classList.remove("drop");
//     // filterRefType.current.classList.remove("drop");
//     hid.current.classList.remove("active");
//     // hid2.current.classList.remove("active");
//     // filterRefType.current.style.display = "none";
//   };
//   useEffect(() => {
//     // setCheckData(
//     //   products.filter((product) =>
//     //     filterStyle.length > 0
//     //       ? filterStyle?.includes(product.style)
//     //       : products &&
//     //     filterType.length > 0
//     //       ? filterType?.includes(product.type)
//     //       : products
//     //   )
//     // );

//     if (filterStyle.length > 0 && filterType.length > 0) {
//       setCheckData(
//         products.filter(
//           (f) => filterStyle.includes(f.style) && filterType.includes(f.type)
//         )
//       );
//     } else if (filterStyle.length > 0 && filterType.length < 1) {
//       setCheckData(products.filter((f) => filterStyle.includes(f.style)));
//     } else if (filterStyle.length < 1 && filterType.length > 0) {
//       setCheckData(products.filter((f) => filterType.includes(f.type)));
//     } else if (filterStyle.length < 1 && filterType.length < 1) {
//       setCheckData([...products]);
//     }
//     // filterType.length > 0 ? setCheckData(products.filter((f) => filterType.includes(f.style))) : setCheckData([...products])

//     // filter.length > 0 ? setCheckData(products.filter((f) => filter.includes(f.style))) : setCheckData([...products])
//     // console.log(filterStyle);
//     // console.log(filterType);
//   }, [filterStyle, filterType]);
//   useEffect(() => {
//     setCheckData(
//       checkData.filter((c) =>
//         filterSize.length > 0 ? filterSize.includes(c.size) : c
//       )
//     );
//   }, [filterSize]);
//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   const [itemOffset, setItemOffset] = useState(0);
//   const itemsPerPage = 12;
//   useEffect(() => {
//     const endOffset = itemOffset + itemsPerPage;
//     setCurrentItems(checkData?.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(checkData?.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage, checkData]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % checkData?.length;
//     setItemOffset(newOffset);
//   };
//   const hid2 = useRef();
//   const hid = useRef();
//   const hidden3 = useRef();
//   const addBasket = (e) => {
//     e.preventDefault();
//   };
//   const addLike = (e) => {
//     e.preventDefault();
//     // console.log(e.target.classList.contains("fa-light"));
//     if (e.target.classList.contains("fa-light")) {
//       e.target.classList.add("fa-solid");
//       e.target.classList.remove("fa-light");
//     } else {
//       e.target.classList.add("fa-light");
//       e.target.classList.remove("fa-solid");
//     }
//   };
//   // const [products, setProducts] = useState([]);
//   // const [checkData, setCheckData] = useState([]);
//   // const [filter, setFilter] = useState([]);
//   // const [filter2, setFilter2] = useState([]);
//   // useEffect(() => {
//   //   const getData = async () => {
//   //     let data = await fetch("http://localhost:7732/furniture").then((a) =>
//   //       a.json()
//   //     );
//   //     setProducts(data.filter((d) => d.type === "1"));
//   //   };
//   //   getData();
//   // }, []);
//   // useEffect(() => {
//   //   setCheckData([...products]);
//   // }, [products]);
//   // const check = (e) => {
//   //   if (e.target.checked) {
//   //     setFilter([...filter, e.target.getAttribute("data-style")]);
//   //     // setCheckData([...filter,products.filter((f)=>f.style==e.target.getAttribute('data'))]);
//   //     console.log(e.target.getAttribute("data-style"));
//   //   } else {
//   //     setFilter(
//   //       filter.filter((f) => f !== e.target.getAttribute("data-style"))
//   //     );
//   //     // setFilter(products.filter((f)=>f.style!==e.target.getAttribute('data')))
//   //   }
//   // };
//   // const check2 = (e) => {
//   //   if (e.target.checked) {
//   //     setFilter2([...filter2, e.target.getAttribute("data-type")]);
//   //   } else {
//   //     setFilter2(
//   //       filter2.filter((f) => f !== e.target.getAttribute("data-type"))
//   //     );
//   //   }
//   // };
//   // useEffect(() => {
//   //   if (filter.length > 0 && filter2.length > 0) {
//   //     setCheckData(
//   //       products.filter(
//   //         (f) => filter.includes(f.style) && filter2.includes(f.type)
//   //       )
//   //     );
//   //   } else if (filter.length > 0 && filter2.length < 1) {
//   //     console.log(filter.lenght);
//   //     console.log(filter2.length);
//   //     setCheckData(products.filter((f) => filter.includes(f.style)));
//   //   } else if (filter.length < 1 && filter2.length > 0) {
//   //     setCheckData(products.filter((f) => filter2.includes(f.style)));
//   //   } else if (filter.length < 1 && filter2.length < 1) {
//   //     setCheckData([...products]);
//   //   }
//   //   // filter2.length > 0 ? setCheckData(products.filter((f) => filter2.includes(f.style))) : setCheckData([...products])

//   //   // filter.length > 0 ? setCheckData(products.filter((f) => filter.includes(f.style))) : setCheckData([...products])
//   //   console.log(filter);
//   //   console.log(filter2);
//   // }, [filter, filter2]);
//   // const [currentItems, setCurrentItems] = useState(null);
//   // const [pageCount, setPageCount] = useState(0);
//   // const [itemOffset, setItemOffset] = useState(0);
//   // const itemsPerPage = 8;
//   // useEffect(() => {
//   //   const endOffset = itemOffset + itemsPerPage;
//   //   setCurrentItems(checkData?.slice(itemOffset, endOffset));
//   //   setPageCount(Math.ceil(checkData?.length / itemsPerPage));
//   // }, [itemOffset, itemsPerPage, checkData]);

//   // // Invoke when user click to request another page.
//   // const handlePageClick = (event) => {
//   //   const newOffset = (event.selected * itemsPerPage) % checkData?.length;
//   //   setItemOffset(newOffset);
//   // };
//   return (
//     <>
//       <Head />
//       <section
//         className="page-header designideas"
//         style={{ backgroundImage: `url('../imgs/design-ideas-page-bg.jpg')` }}
//       >
//         <div className="container">
//           <h2>Qonaq otağı</h2>
//         </div>
//       </section>
//       <section id="all-category">
//         <div className="container">
//           <div id="all-category-top">
//             <h5>BÜTÜN KATEQORİYALAR</h5>
//             <div className="hidden"></div>
//             <div id="all-category-filter-btns">
//               <div onMouseLeave={() => mouseOut()}>
//                 <button onClick={() => filterFuncAll()}>
//                   Ümumi <i class="fa-thin fa-sliders"></i>
//                 </button>
//                 <div className="hid3" ref={hidden3}>
//                   <div className="filter " ref={filterRefAll}>
//                     {/* <h6>Qiymətə görə</h6>
//                     <ul>
//                       <li>
//                         <label htmlFor="">
//                           <input
//                             type="checkbox"
//                             data-type=""
//                             onClick={checkType}
//                           />
//                           <span>Coxdan aza</span>
//                         </label>
//                       </li>
//                       <li>
//                         <label htmlFor="">
//                           <input
//                             type="checkbox"
//                             data-type=""
//                             onClick={checkType}
//                           />
//                           <span>Azdan çoxa</span>
//                         </label>
//                       </li>
//                     </ul> */}
//                     <h6>Hecm</h6>
//                     <ul>
//                       <li>
//                         <label htmlFor="">
//                           <input
//                             type="checkbox"
//                             data-size="1"
//                             onClick={checkSize}
//                           />
//                           <span>Böyük</span>
//                         </label>
//                       </li>
//                       <li>
//                         <label htmlFor="">
//                           <input
//                             type="checkbox"
//                             data-size="2"
//                             onClick={checkType}
//                           />
//                           <span>Orta</span>
//                         </label>
//                       </li>
//                       <li>
//                         <label htmlFor="">
//                           <input
//                             type="checkbox"
//                             data-size="3"
//                             onClick={checkType}
//                           />
//                           <span>Kiçik</span>
//                         </label>
//                       </li>
//                     </ul>
//                     <h6>Qiymət aralığı</h6>
//                     <ul>
//                       <li>
//                         <label htmlFor="">
//                           <input
//                             type="checkbox"
//                             data-type=""
//                             onClick={checkType}
//                           />
//                           <span>0 - 1500</span>
//                         </label>
//                       </li>
//                       <li>
//                         <label htmlFor="">
//                           <input
//                             type="checkbox"
//                             data-type=""
//                             onClick={checkType}
//                           />
//                           <span>1500-4500</span>
//                         </label>
//                       </li>
//                       <li>
//                         <label htmlFor="">
//                           <input
//                             type="checkbox"
//                             data-type=""
//                             onClick={checkType}
//                           />
//                           <span>4500-10000</span>
//                         </label>
//                       </li>
//                       <li>
//                         <label htmlFor="">
//                           <input
//                             type="checkbox"
//                             data-type=""
//                             onClick={checkType}
//                           />
//                           <span>10000+</span>
//                         </label>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div onMouseLeave={() => mouseOut()}>
//                 <button onClick={() => filterFuncType()}>
//                   Kateqoriyalar <i className="fa-light fa-chevron-down"></i>
//                 </button>
//                 <div className="hid2" ref={hid2}>
//                   <ul className="filter" ref={filterRefType}>
//                     {typeData.map((type, index) => (
//                       <li key={index}>
//                         <label htmlFor="">
//                           <input
//                             type="checkbox"
//                             data-type={`${type.id}`}
//                             onClick={checkType}
//                           />
//                           <span>{type.name}</span>
//                         </label>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div onMouseLeave={() => mouseOut()}>
//                 <button onClick={() => filterFuncStyle()}>
//                   Stillər <i className="fa-light fa-chevron-down"></i>
//                 </button>
//                 <div ref={hid} className="hid">
//                   <ul className="filter" ref={filterRefStyle}>
//                     {styleData.map((style, index) => (
//                       <li key={index}>
//                         <label htmlFor="">
//                           <input
//                             type="checkbox"
//                             data-style={`${style.id}`}
//                             onClick={checkStyle}
//                           />
//                           <span>{style.name}</span>
//                         </label>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div id="all-category-items">
//             {currentItems?.map((designIdea) => (
//               <Link
//                 to={`/design_ideas/details/${designIdea.id}`}
//                 key={designIdea.id}
//                 className="all-category-item"
//               >
//                 <img src={designIdea.upload} alt="" />
//                 <span>$ {designIdea.price}</span>
//                 <div onClick={(e) => addBasket(e)} className="add-basket">
//                   <i className="fa-thin fa-cart-shopping"></i> Səbətə əlavə et
//                 </div>
//                 <div className="add-like">
//                   <i
//                     onClick={(e) => addLike(e)}
//                     className="fa-light fa-heart"
//                   ></i>
//                 </div>
//               </Link>
//             ))}
//             <div id="pagination">
//               <ReactPaginate
//                 breakLabel="..."
//                 nextLabel="növbəti >"
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={3}
//                 pageCount={pageCount}
//                 previousLabel="< əvvəlki"
//                 renderOnZeroPageCount={null}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <section className="sec1" id="kitchen">
//         <Header />
//         <div
//           className="di-head"
//           style={{
//             backgroundImage: `url(/imgs/livingFoto.jpeg)`,
//             height: "400px",
//           }}
//         ></div>
//       </section>
//       <section id="kitchen-products">
//         <div className="container">
//           <div id="design-ideas-all">
//             {currentItems?.map((furniture) => (
//               <Link
//                 to={`/design_ideas/details/${furniture.id}`}
//                 key={furniture.id}
//                 className="design-idea-all"
//               >
//                 <div className="design-idea-all-image">
//                   <img src={furniture.upload} alt="" />
//                 </div>
//                 <div className="design-idea-all-text">
//                   <p>Ətraflı</p>
//                 </div>
//                 <div className="design-idea-all-name">
//                   <p>{furniture.name}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           <div id="pagination">
//             <ReactPaginate
//               breakLabel="..."
//               nextLabel="next >"
//               onPageChange={handlePageClick}
//               pageRangeDisplayed={3}
//               pageCount={pageCount}
//               previousLabel="< previous"
//               renderOnZeroPageCount={null}
//             />
//           </div>
//         </div>
//       </section> */}
//       {/* <section className='sec1'>
//         <div className="filter">
//           <p>filter</p>
//           <ul>
//             <li>
//               <label htmlFor="checkbox-lr">
//                 <input type="checkbox" data-style='1' name="name" id="checkbox-lr"
//                   onClick={check} />
//                 Modern
//               </label>
//             </li>
//             <li>
//               <label htmlFor="checkboxx-lr">
//                 <input type="checkbox" data-style='3' name="name" id="checkboxx-lr" onClick={check} />
//                 Orta əsr
//               </label>
//             </li>
//           </ul>
//         </div>
//         <div className="filter2">
//           <p>Room</p>
//           <ul>
//             <li>
//               <label htmlFor="">
//                 <input type="checkbox" name="" id="" data-type='1' onClick={(e) => check2(e)} />
//                 Qonaq otagi
//               </label>
//               <label htmlFor="">
//                 <input type="checkbox" data-type='3' name="" id="" onClick={(e) => check2(e)} />
//                 Yatag otagi
//               </label>
//             </li>
//             <li>

//             </li>
//           </ul>
//         </div>
//         <div className="row-lr">
//           <div className="container-di">
//             {
//               checkData?.map((f, index) => (
//                 <Link
//                 // to={f.type==1?`/design_ideas/livingroom/details/${f.id}`:""}
//                 to={`/design_ideas/details/${f.id}`} key={index}
//                 className="item-lr">
//                   <div className="item-f-image">
//                     <img src={f.image} alt="" />
//                   </div>
//                   <p>
//                     {f.name}
//                   </p>
//                 </Link>
//               ))
//             }
//           </div>
//         </div>
//       </section> */}
//       {/* <Footer /> */}
//     </>
//   );
// }

// export default Living;
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import ReactPaginate from "react-paginate";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { connect, Connect } from "react-redux";
function Livingroom(props) {
  const [typeData, setTypeData] = useState([]);
  const [styleData, setStyleData] = useState([]);
  const [products, setProducts] = useState([]);
  const [checkData, setCheckData] = useState([]);
  const [filterStyle, setFilterStyle] = useState([]);
  const [filterType, setFilterType] = useState([]);
  const [filterSize, setFilterSize] = useState([]);

  const addLike = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("fa-light")) {
      e.target.classList.add("fa-solid");
      e.target.classList.remove("fa-light");
    } else {
      e.target.classList.add("fa-light");
      e.target.classList.remove("fa-solid");
    }
  };
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(checkData?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(checkData?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, checkData]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % checkData?.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7732/furniture").then((a) =>
        a.json()
      );
      setProducts(data.filter((d) => d.type == "1"));
    };
    getData();
    const getStyle = async () => {
      let data = await fetch("http://localhost:7732/style").then((b) =>
        b.json()
      );
      setStyleData(data);
    };
    getStyle();
    const getTypeData = async () => {
      let data = await fetch("http://localhost:7732/type").then((c) =>
        c.json()
      );
      setTypeData(data);
    };
    getTypeData();
    const getItemData = async () => {
      let data = await fetch(" http://localhost:7732/item").then((a) =>
        a.json()
      );
    };
    getItemData();
  }, []);
  useEffect(() => {
    setCheckData([...products]);
  }, [products]);
  const checkStyle = (e) => {
    if (e.target.checked) {
      setFilterStyle([...filterStyle, e.target.getAttribute("data-style")]);
      // setCheckData([...filter,products.filter((f)=>f.style==e.target.getAttribute('data'))]);
      // console.log(e.target.getAttribute("data-style"));
    } else {
      setFilterStyle(
        filterStyle.filter((f) => f !== e.target.getAttribute("data-style"))
      );
      // setFilter(products.filter((f)=>f.style!==e.target.getAttribute('data')))
    }
  };
  const checkSize = (e) => {
    if (e.target.checked) {
      // e.preventDefault();
      setFilterSize([...filterSize, e.target.getAttribute("data-size")]);
    } else {
      setFilterSize(
        filterSize.filter((f) => f !== e.target.getAttribute("data-size"))
      );
    }
  };
  const checkType = (e) => {
    if (e.target.checked) {
      // e.preventDefault();
      setFilterType([...filterType, e.target.getAttribute("data-type")]);
    } else {
      setFilterType(
        filterType.filter((f) => f !== e.target.getAttribute("data-type"))
      );
    }
  };
  useEffect(() => {
    if (filterStyle.length > 0 && filterType.length > 0) {
      setCheckData(
        products.filter(
          (f) => filterStyle.includes(f.style) && filterType.includes(f.type)
        )
      );
    } else if (filterStyle.length > 0 && filterType.length < 1) {
      setCheckData(products.filter((f) => filterStyle.includes(f.style)));
    } else if (filterStyle.length < 1 && filterType.length > 0) {
      setCheckData(products.filter((f) => filterType.includes(f.type)));
    } else if (filterStyle.length < 1 && filterType.length < 1) {
      setCheckData([...products]);
    }
  }, [filterStyle, filterType]);
  return (
    <>
      <Head />
      <section
        className="page-header designideas"
        style={{ backgroundImage: `url('/imgs/design-ideas-page-bg.jpg')` }}
      >
        <div className="container">
          <h2>Qonaq otagi</h2>
        </div>
      </section>
      <section id="all-category">
        <div className="container">
          <div className="all-left">
            <div id="filter-head">
              <h4>Filter</h4>
            </div>
            {/* <div className="filter-group">
              <button>Kategoriyalar</button>
              <ul className="filter-slider">
                {typeData.map((type, index) => (
                  <li key={index}>
                    <label htmlFor="">
                      <input
                        type="checkbox"
                        data-type={`${type.id}`}
                        onClick={checkType}
                      />
                      <span>{type.name}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div> */}
            <div className="filter-group">
              <button>Stillər</button>
              <ul className="filter-slider">
                {styleData.map((style, index) => (
                  <li key={index}>
                    <label htmlFor="">
                      <input
                        type="checkbox"
                        data-style={`${style.id}`}
                        onClick={checkStyle}
                      />
                      <span>{style.name}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="filter-group short">
              <button>Hecm</button>
              <ul className="filter-slider">
                <li>
                  <label htmlFor="">
                    <input type="checkbox" data-size="1" onClick={checkSize} />
                    <span>Böyük</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="">
                    <input type="checkbox" data-size="2" onClick={checkSize} />
                    <span>Orta</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="">
                    <input type="checkbox" data-size="3" onClick={checkSize} />
                    <span>Kiçik</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter-group range">
              <button>Qiymət aralığı</button>
              <input type="range" multiple name="" id="" />
            </div>
          </div>
          <div className="all-right">
            <h5>BÜTÜN KATEQORİYALAR</h5>

            <div id="all-category-items">
              {currentItems?.map((designIdea) => (
                <Link
                  to={`/design_ideas/details/${designIdea.id}`}
                  key={designIdea.id}
                  className="all-category-item"
                >
                  <img src={designIdea.upload} alt="" />
                  <span>$ {designIdea.price}</span>
                  {/* <div onClick={(e,designIdea) => addBasket(e,designIdea)} className="add-basket"> */}
                  <div
                    onClick={(e) => {
                      let exist = props.basket.find(
                        (a) => a.id === designIdea.id
                      );
                      // let exist = false;
                      e.preventDefault();
                      if (exist) {
                        exist.count++;
                        props.dispatch({
                          type: "addBasket",
                          payload: [...props.basket],
                        });
                      } else {
                        props.dispatch({
                          type: "addBasket",
                          payload: [
                            ...props.basket,
                            {
                              id: designIdea.id,
                              count: 1,
                              name: designIdea.name,
                              price: designIdea.price,
                              upload: designIdea.upload,
                            },
                          ],
                        });
                      }
                    }}
                    className="add-basket"
                  >
                    <i className="fa-thin fa-cart-shopping"></i> Səbətə əlavə et
                  </div>
                  <div className="add-like">
                    <i
                      onClick={(e) => addLike(e)}
                      className="fa-light fa-heart"
                    ></i>
                  </div>
                </Link>
              ))}
              <div id="pagination">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="növbəti >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  previousLabel="< əvvəlki"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const a = (b) => b;
export default connect(a)(Livingroom);
