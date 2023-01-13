import { useEffect, useState } from "react";
import Head from "../components/Head";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
function BlogAll() {
  const [blogs, setBlogs] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
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
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, blogs]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7732/blog").then((a) =>
        a.json()
      );
      setBlogs(data);
    };
    getData();
  }, []);
  return (
    <>
      <Head />
      <section id="all-blog-section">
        <div className="container">
          <div id="all-blog-head">
            <h5>Bütün Bloglar</h5>
          </div>
          <div id="all-blogs">
            {currentItems?.map((blog, index) => (
              <Link to={`/blog/${blog.id}`} key={index} className="all-blog">
                <div className="all-blog-image">
                  <img src={blog.blogImage} alt="" />
                </div>
                <div className="all-blog-text">
                  <div>
                    <span>
                      <b>{blog.author} </b> {blog.blogDate[2]}{" "}
                      {months[blog.blogDate[1]]}, {blog.blogDate[0]}
                    </span>
                    <span id="view">
                      <i className="fa-solid fa-eye"></i> {blog.view}
                    </span>
                  </div>
                  <h5>{blog.blogName}</h5>
                  <p>
                    {`${
                      blog.blogOverview.length > 250
                        ? blog.blogOverview.slice(0, 150) + "..."
                        : blog.blogOverview
                    } `}
                  </p>
                  <div>
                    <span>
                      <i className="fa-light fa-heart"></i> 55
                    </span>
                    <span>
                      <i className="fa-light fa-comment"></i> 15
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* <div className="all-blog">
              <div className="all-blog-image">
                <img
                  src="https://interior-design.cmsmasters.net/wp-content/uploads/2015/04/Splyce-Kitsilano-08a-1024x640.jpg"
                  alt=""
                />
              </div>
              <div className="all-blog-text">
                <div>
                  <span>
                    <b>Samir Əliyev </b> tərəfindən 3 Oktyabr, 2022
                  </span>
                  <span id="view">
                    <i className="fa-solid fa-eye"></i> 25
                  </span>
                </div>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
                <div>
                  <span>
                    <i className="fa-light fa-heart"></i> 55
                  </span>
                  <span>
                    <i className="fa-light fa-comment"></i> 15
                  </span>
                </div>
              </div>
            </div> */}
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
        </div>
      </section>
    </>
  );
}

export default BlogAll;
