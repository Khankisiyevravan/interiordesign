import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import Head from "./Head";
function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);
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
    const getBlogDetail = async () => {
      let data = await fetch(`http://localhost:7732/blog/${id}`).then((a) =>
        a.json()
      );
      console.log(data);
      setBlog(data);
    };
    getBlogDetail();
    const getBlogsDetail = async () => {
      let data = await fetch(`http://localhost:7732/blog/`).then((a) =>
        a.json()
      );
      console.log(data);
      setBlogs(data);
    };
    getBlogsDetail();
  }, []);
  useEffect(() => {
    const getBlogDetail = async () => {
      let data = await fetch(`http://localhost:7732/blog/${id}`).then((a) =>
        a.json()
      );
      console.log(data);
      setBlog(data);
    };
    getBlogDetail();
    const getBlogsDetail = async () => {
      let data = await fetch(`http://localhost:7732/blog/`).then((a) =>
        a.json()
      );
      console.log(data);
      setBlogs(data);
    };
    getBlogsDetail();
  }, [id]);

  return (
    <>
      <Head />

      <section id="blog-detail">
        <div className="container">
          <div id="blog-head">
            <div id="author-details">
              <div id="author-image">
                <img src={blog?.authorImage} alt="" />
              </div>
              <div id="author-text">
                <h6>{blog?.author}</h6>
                <span id="author-date">{`${
                  blog.blogDate && blog?.blogDate[2]
                }-${blog.blogDate && blog?.blogDate[1]}-${
                  blog.blogDate && blog?.blogDate[0]
                }`}</span>
              </div>
            </div>
          </div>
          <div id="blog-main">
            <h4 id="blog-header">{blog.blogName}</h4>
          </div>
          <div id="blog-image">
            <img src={blog.blogImage} alt="" />
          </div>
          <div id="blog-text-head">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </div>
          <div id="blog-text">{blog.blogOverview}</div>
        </div>
      </section>
      <section id="other-blogs-section">
        <div className="container">
          <div id="other-blog-head">
            <h5>Əlavə olaraq oxu</h5>
          </div>
          <div id="other-blogs">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {blogs?.map((b) => (
                <SwiperSlide>
                  <Link to={`/blog/${b.id}`} className="blog-other">
                    <div className="blog-other-image">
                      <img src={b.blogImage} alt="" />
                    </div>
                    <div className="other-text">
                      <span>
                        <b>{b.author} </b> tərəfindən {b.blogDate[2]}{" "}
                        {months[b.blogDate[1]]}, {b.blogDate[0]}
                      </span>
                      <h5>{b.blogName}</h5>
                      <p>
                        {b.blogOverview.length > 150
                          ? b.blogOverview.slice(0, 153)
                          : b.blogOverview}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
              {/* <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetails;
