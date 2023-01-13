import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Head from "../../components/Head";
import ReactPaginate from "react-paginate";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { connect, Connect } from "react-redux";
function Childroom(props) {
  console.log(props);
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
      setProducts(data.filter((d) => d.type == "6"));
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
          <h2>Usaq otagi</h2>
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
export default connect(a)(Childroom);
