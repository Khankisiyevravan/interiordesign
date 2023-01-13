import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReactPaginate from "react-paginate";
import Head from "../../components/Head";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { connect, Connect } from "react-redux";
function DesignIdeas(props) {
  // console.log(props);
  const [typeData, setTypeData] = useState([]);
  const [styleData, setStyleData] = useState([]);
  const [products, setProducts] = useState([]);
  const [checkData, setCheckData] = useState([]);
  const [filterStyle, setFilterStyle] = useState([]);
  const [filterType, setFilterType] = useState([]);
  const [filterSize, setFilterSize] = useState([]);
  const [show, setShow] = useState(false);
  const filterRefType = useRef();
  const filterRefStyle = useRef();
  const filterRefAll = useRef();
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7732/furniture").then((a) =>
        a.json()
      );
      // console.log(data);
      setProducts(data);
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
      // console.log(data);
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
  const filterFuncType = () => {
    filterRefType.current.classList.toggle("drop");
    hid2.current.classList.toggle("active");
  };
  const filterFuncAll = () => {
    filterRefAll.current.classList.toggle("drop");
    hidden3.current.classList.toggle("active");
  };
  const filterFuncStyle = () => {
    filterRefStyle.current.classList.toggle("drop");
    hid.current.classList.toggle("active");
  };
  const mouseOut = () => {
    filterRefStyle.current.classList.remove("drop");
    filterRefType.current.classList.remove("drop");
    filterRefAll.current.classList.remove("drop");
    hid.current.classList.remove("active");
    hid2.current.classList.remove("active");
    hidden3.current.classList.remove("active");
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
  useEffect(() => {
    filterSize.length > 0
      ? setCheckData(checkData.filter((c) => filterSize.includes(c.size)))
      : setCheckData([...products]);
  }, [filterSize]);
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
  const hid2 = useRef();
  const hid = useRef();
  const hidden3 = useRef();
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
  const filterAll = (e) => {
    let ul = e.target.closest("div").querySelector("ul");
    ul.classList.toggle("active");
    // console.log(ul);
  };
  const left = useRef();
  const filterClose = ()=>{
    left.current.style.transform ="translateX(100%)"
  }
  const openFilter = ()=>{
    left.current.style.transform ="translateX(0)"
  }
  return (
    <>
      <Head />
      <section
        className="page-header designideas"
        style={{ backgroundImage: `url('./imgs/design-ideas-page-bg.jpg')` }}
      >
        <div className="container">
          <h2>Dizayn İdeyaları</h2>
        </div>
      </section>
      <section id="all-category">
        <div className="container">
          <div ref={left} className="all-left">
            <div id="filter-head">
              <h4>
                Filter{" "}
                <i
                  id="xx"
                  onClick={() => filterClose()}
                  class="fa-light fa-x"
                ></i>
              </h4>
            </div>
            <div className="filter-group">
              <button
              // onClick={(e) => filterAll(e)}
              >
                Kategoriyalar
                {/* <i className="fa-light fa-chevron-down"></i> */}
              </button>
              <ul className="filter-slider">
                {typeData.map((type, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="checkbox"
                        data-type={`${type.id}`}
                        onClick={(e) => checkType(e)}
                      />
                      {type.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="filter-group">
              <button
              // onClick={(e) => filterAll(e)}
              >
                Stillər
                {/* <i className="fa-light fa-chevron-down"></i> */}
              </button>
              <ul className="filter-slider">
                {styleData.map((style, index) => (
                  <li key={index}>
                    <label>
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
              <button
              // onClick={(e) => filterAll(e)}
              >
                Hecm
                {/* <i className="fa-light fa-chevron-down"></i> */}
              </button>
              <ul className="filter-slider">
                <li>
                  <label>
                    <input type="checkbox" data-size="1" onClick={checkSize} />
                    <span>Böyük</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" data-size="2" onClick={checkSize} />
                    <span>Orta</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" data-size="3" onClick={checkSize} />
                    <span>Kiçik</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter-group range">
              <button
              // onClick={(e) => filterAll(e)}
              >
                Qiymət aralığı
                {/* <i className="fa-light fa-chevron-down"></i> */}
              </button>
              <input type="range" multiple name="" id="" />
              {/* <ul className="filter-slider">
                <li>
                  <label htmlFor="">
                    <input type="checkbox" data-type="" onClick={checkType} />
                    <span>0 - 1500</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="">
                    <input type="checkbox" data-type="" onClick={checkType} />
                    <span>1500-4500</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="">
                    <input type="checkbox" data-type="" onClick={checkType} />
                    <span>4500-10000</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="">
                    <input type="checkbox" data-type="" onClick={checkType} />
                    <span>10000+</span>
                  </label>
                </li>
              </ul> */}
            </div>
            {/* <div className="filter-group">
              <button onClick={(e) => filterAll(e)}>
                Kategoriya <i className="fa-light fa-chevron-down"></i>
              </button>
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
            </div> */}
          </div>
          <div className="all-right">
            <div>
              <h5>BÜTÜN KATEQORİYALAR</h5>{" "}
              <i onClick={(e)=>openFilter(e)} class="fa-solid fa-bars-filter"></i>
            </div>

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
      {/* <Header />
      <section className="sec1" id="design-types-section">
        <div className="container">
          <div id="design-type-head">Kategoriyalar</div>
          <div id="design-types">
            {typeData.map((type) => (
              <Link
                to={type.navLink}
                data-aos="fade-up"
                data-aod-delay="1000"
                key={type.id}
                className="design-type"
              >
                <div className="design-type-image">
                  <img src={type.image} alt="" />
                </div>
                <div className="design-type-text">{type.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="design-ideas-all-section">
        <div className="container">
          <div id="design-ideas-all-head">Bütün kateqoriyalar</div>

          <div id="design-ideas-all-filters">
            <div
              className="design-idea-all-filter"
              onMouseLeave={() => mouseOut()}
            >
              <p onClick={() => filterFuncType()}>type</p>
              <ul className="design-idea-all-filter-dropdown" ref={filterRefType}>
                {typeData.map((type, index) => (
                  <li className="filter" key={index}>
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
            </div>
            <div
              className="design-idea-all-filter"
              onMouseLeave={() => mouseOut()}
            >
              <p onClick={() => filterFuncStyle()}>Style</p>
              <ul className="design-idea-all-filter-dropdown" ref={filterRefStyle}>
                {styleData.map((style, index) => (
                  <li className="filter" key={index}>
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
          </div>
          <div id="design-ideas-all">
            {currentItems?.map((designIdea) => (
              <Link
                to={`/design_ideas/details/${designIdea.id}`}
                key={designIdea.id}
                className="design-idea-all"
              >
                <div className="design-idea-all-image">
                  <img src={designIdea.upload} alt="" />
                </div>
                <div className="design-idea-all-text">
                  <p>Ətraflı</p>
                </div>
                <div className="design-idea-all-name">
                  <p>{designIdea.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div id="pagination">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </section> */}
      {/* <section className="sec1 design-ideas">
        <div className="row-di">
          <div className="container-di">
            <h4
              data-aos='fade-left'
              data-aos-delay='500'
            >
              Ev Dekoru
            </h4>
            <h2
              data-aos='fade-left'
              data-aos-delay='700'
            >
              Dizayn Ideaları
            </h2>
            <p
              data-aos='fade-left'
              data-aos-delay='900'
            >
              Modsy's Design Ideas qalereyası qonaq otağı, yemək otağı, yataq otağı, ofis və ya evdəki hər hansı bir otaq üçün daxili dizayndan ilham almağın ən asan yoludur! Hər üslubda məkan dizaynları, rəng birləşmələri və estetika ilə, təsəvvürünüzü oyatmaq üçün gözəl təsvirlərin heç bir çatışmazlığı yoxdur.
            </p>
          </div>
        </div>
        <div className="row-di2">
          <div className="container-di">
            {
              typeData.map((t) => (
                <Link
                  className='item-di'
                  data-aos='fade-up'
                  data-aod-delay='1000'
                  key={t.id}
                  to={t.navLink}
                >
                  <div className='item-image-di'>
                    <img src={t.image} alt="" />
                    <div className='item-text'>
                      <div className="i">
                        <i className={t.iconName}></i>
                      </div>
                      <h3>
                        {t.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
        <div className='row-btn'>
          <button onClick={() => setShow(true)}>
            Butun mebelleri gosterin --
          </button>
        </div>
        {show ? (
          <div data-aos="fade-right" className="row-di3" key={1}>
            <div className="filters">
              <div className="filter" onMouseLeave={() => mouseOut()}>
                <p onClick={() => filterFuncType()}>
                  Style
                  <i className="fa-solid fa-angle-down"></i>
                </p>
                <ul ref={filterRefType}>
                  {styleData.map((s, index) => (
                    <li key={index}>
                      <label htmlFor="">
                        <input
                          type="checkbox"
                          data-style={`${s.id}`}
                          onClick={checkStyle}
                        />
                        {s.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="filterType" onMouseLeave={() => mouseOut()}>
                <p onClick={() => filterFuncStyle()}>
                  Room
                  <i className="fa-solid fa-angle-down"></i>
                </p>
                <ul ref={filterRefStyle}>
                  {typeData.map((t, index) => (
                    <li key={index}>
                      <label htmlFor="" key={index}>
                        <input
                          type="checkbox"
                          data-type={`${t.id}`}
                          onClick={(e) => checkType(e)}
                        />
                        {t.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="container-di">
              {checkData?.map((f, index) => (
                <Link
                  to={`/design_ideas/details/${f.id}`}
                  key={index}
                  className="item-di-all"
                >
                  <div
                    className="item-f-image-all"
                    style={{ backgroundImage: `url('${f.upload}')` }}
                  ></div>
                  <div className="di-pos">
                    <h4>{f.name}</h4>
                    <p>Ətraflı</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </section> */}
      {/* <Footer /> */}
    </>
  );
}
const a = (b) => b;
export default connect(a)(DesignIdeas);
