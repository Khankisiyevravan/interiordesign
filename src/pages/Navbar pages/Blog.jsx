import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Head from "../../components/Head";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function Blog() {
  const { cat } = useParams();
  const { q } = useParams();
  const blogInputSearch = useRef();
  const blogCategoriesDiv = useRef();
  const [resultBlogs, setResultBlogs] = useState([]);
  const [blogDetails, setBlogDetails] = useState([]);
  const [blogCategories, setBlogCategories] = useState();
  const [searchResults, setSearchResults] = useState();
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [intVal, setIntVal] = useState("");
  const [popularBlog, setPopularBlog] = useState({});
  // console.log(cat);
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];
  useEffect(() => {
    const getBlog = async () => {
      let dataBlogs = await fetch("http://localhost:7732/blog").then((a) =>
        a.json()
      );
      console.log(dataBlogs);
      setPopularBlog(dataBlogs.find((d) => d.popular == "true"));
      console.log(dataBlogs.find((d) => d.popular == "true"));
      setBlogDetails(dataBlogs);
    };
    getBlog();
    const getBlogCategories = async () => {
      let dataBlogCategories = await fetch(
        "http://localhost:7732/blogCategories"
      ).then((a) => a.json());
      // console.log(dataBlogCategories);
      setBlogCategories(dataBlogCategories);
    };
    getBlogCategories();
  }, []);
  useEffect(() => {
    setResultBlogs([...blogDetails]);
    // console.log(blogDetails);
    setPopularBlogs(blogDetails.filter((bd) => bd.popular == "true"));
    // console.log(popularBlogs);
  }, [blogDetails]);
  useEffect(() => {
    const catId = blogCategories?.filter((bc) => bc.blogCategoryName == cat);
    // console.log(catId);
    if (!cat) {
      // console.log("und");
      // console.log(blogDetails);
      setResultBlogs([...blogDetails]);
    } else {
      setResultBlogs(
        blogDetails?.filter((bd) => bd.blogCategory == catId[0].id)
      );
      console.log(blogDetails?.filter((bd) => bd.blogCategory == catId[0].id));
    }
  }, [cat]);
  const blogSearch = (e) => {
    let inputValue = e.target.value;
    setIntVal(e.target.value);
    console.log(inputValue.toLowerCase().length);
    if (inputValue.length > 0) {
      blogCategoriesDiv.current.style.marginTop = "160px";
      setSearchResults(
        blogDetails.filter((results) =>
          results.blogName.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    } else {
      blogCategoriesDiv.current.style.marginTop = "40px";
      setSearchResults([]);
    }
  };
  const categoryClick = (e) => {
    if (q === e.target.value) {
      e.target.classList.add("active");
    }
  };
  ////////////////////////////
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(resultBlogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(resultBlogs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, resultBlogs]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % resultBlogs.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Head />
      <section
        className="page-header designideas"
        style={{ backgroundImage: `url('./imgs/design-ideas-page-bg.jpg')` }}
      >
        <div className="container">
          <h2>Bloglar</h2>
        </div>
      </section>
      <section id="new-blogs-section">
        <div className="container">
          <div id="new-blogs-section-head">
            <h5>ƏN YENİ BLOQLAR</h5>
            <Link to="/blog/all">Bütün bloglar</Link>
          </div>
          <div id="new-blogs-section-main">
            <div id="new-blog">
              <div id="new-blog-image">
                <img src={popularBlog?.blogImage} alt="" />
              </div>
              <div id="new-blog-text">
                <span>
                  <b>{popularBlog?.author} </b>{" "}
                  {popularBlog.blogDate &&
                    `${popularBlog.blogDate[2]}
                ${months[popularBlog?.blogDate[1]]}, ${
                      popularBlog?.blogDate[0]
                    }`}
                </span>
                <h5>{popularBlog.blogName}</h5>
                <p>
                  {popularBlog.blogOverview?.length > 200
                    ? popularBlog.blogOverview.slice(0, 220) + "..."
                    : popularBlog.blogOverview}
                </p>
                <Link
                  className="btn2 btn2-hover"
                  to={`/blog/${popularBlog.id}`}
                >
                  Daha Ətraflı Oxu
                </Link>
              </div>
            </div>
            <div id="old-blogs">
              {blogDetails.slice(0, 3).map((blogDetail, index) => (
                <Link
                  to={`/blog/${blogDetail.id}`}
                  className="old-blog"
                  key={index}
                >
                  <span>
                    <b>{blogDetail.author} </b> tərəfindən{" "}
                    {blogDetail.blogDate[2]} {months[blogDetail.blogDate[1]]},{" "}
                    {blogDetail.blogDate[0]}
                  </span>
                  <h5>{blogDetail.blogName}</h5>
                  <p>{`${blogDetail.blogOverview.slice(0, 105)} ...`}</p>
                </Link>
              ))}
              {/* <div className="old-blog">
                <span>
                  <b>Samir Əliyev </b> tərəfindən 3 Oktyabr, 2022
                </span>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="blog-categories">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {blogCategories?.map((type, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={type.image} alt="" />
                </div>
                <div className="swiper-slide-text black">
                  <h6>{type.blogCategoryName}</h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* <Header />
      <section className="sec1 blog">
        <div className="container">
          <div id="blogs-cards">
            {currentItems?.map((blogdetail) => (
              <div className="blog-card" key={blogdetail.id}>
                <Link to={`/blog/${blogdetail.id}`} className="blog-card-image">
                  <img src={blogdetail.upload} alt="" />
                </Link>
                <div className="blog-card-text">
                  <div className="blog-date">
                    <p>
                      {months[blogdetail.blogDate[1]]
                        .slice(0, 3)
                        .toLocaleUpperCase()}
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                      {blogdetail.blogDate[2].length > 1
                        ? blogdetail.blogDate[2]
                        : "0" + blogdetail.blogDate[2]}
                    </p>
                    <p>
                      {blogdetail.blogDate[0]}
                    </p>
                  </div>
                  <div>
                    <p>{blogdetail.blogName.slice(0, 100)}.</p>
                    <Link to={`/blog/${blogdetail.id}`}>Ətraflı &#8594;</Link>
                  </div>
                </div>
              </div>
            ))}
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
          <div id="blog-right">
            <div id="blog-search">
              <input
                ref={blogInputSearch}
                type="text"
                placeholder="Axtarıs edin"
                onChange={(e) => blogSearch(e)}
              />
              <Link
                to={`/blog/detail&query=${intVal}&category=${cat}`}
                // onClick={() => blogSearch()}
              >
                Axtar
              </Link>
              <div id="blog-search-results">
                {searchResults?.map((searchresult) => (
                  <Link
                    to={`/blog/${searchresult.id}`}
                    key={searchresult.id}
                    className="search-result"
                  >
                    {searchresult.blogName.slice(0, 30) + "..."}
                  </Link>
                ))}
              </div>
            </div>
            <div ref={blogCategoriesDiv} id="blog-categories-div">
              <p>Blog Categories</p>
              <div id="blog-categories">
                {blogCategories?.map((category) => (
                  <Link
                    onClick={(e) => categoryClick(e)}
                    to={`/blog/detail&category=${category.blogCategoryName}`}
                    key={category.id}
                    className={
                      cat === category.blogCategoryName
                        ? "blog-category active"
                        : "blog-category"
                    }
                  >
                    <i className="fa-regular fa-circle-right"></i>
                    {category.blogCategoryName}
                  </Link>
                ))}
              </div>
            </div>
            <div id="popular-blogs-div">
              <p>Populyar Bloglar</p>
              <div id="popular-blogs">
                {popularBlogs?.map((pb, index) => (
                  <Link
                    to={`/blog/${pb.id}`}
                    key={index}
                    className="popular-blog"
                  >
                    <div className="popular-blog-image">
                      <img src={pb.upload} alt="" />
                    </div>
                    <div className="popular-blog-text">
                      <span>
                        {`${months[pb.blogDate[1]]} ${pb.blogDate[2]} , ${
                          pb.blogDate[0]
                        }`}
                      </span>
                      <p>{pb.blogName}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </section> */}
      {/* <Footer /> */}
    </>
  );
}

export default Blog;
