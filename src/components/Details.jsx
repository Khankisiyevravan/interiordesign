import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Head from "./Head";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
function Details() {
  const { id } = useParams();
  const [typeData, setTypeData] = useState([]);
  const [styleData, setStyleData] = useState([]);
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [productsItems, setProductItems] = useState([]);
  // console.log(id);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`http://localhost:7732/furniture/${id}`).then(
        (a) => a.json()
      );
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
    const getProductItemData = async () => {
      let data = await fetch("http://localhost:7732/item").then((p) =>
        p.json()
      );
      setItems(data);
    };
    getProductItemData();
  }, []);
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
  useEffect(() => {
    let itemsId = products.item;
    // console.log(itemsId);
    // console.log(items);
    items.length > 0 &&
      setProductItems(
        items.filter((item) => itemsId.includes(item.id.toString()))
      );
    // console.log(items);
    // console.log(itemsId);
    // items.map((ite)=>{
    //   let ud =ite.id
    //   console.log(ud.toString());
    //   console.log(itemsId.includes(ud.toString()));
    //   // console.log(ite);
    // })
    // console.log(productsItems);
  }, [items, products]);
  const style = styleData.find((s) => s.id == products.style);
  const type = typeData.find((t) => t.id == products.type);
  // console.log(style?.name);

  return (
    <>
      <Head />
      <section
        className="page-header designideas"
        style={{
          backgroundImage: `url('  ../../imgs/design-ideas-page-bg.jpg')`,
        }}
      >
        <div className="container">
          <h2>{products.name}</h2>
        </div>
      </section>
      <section id="product">
        <div className="container">
          <div id="product-image">
            <img src={products.upload} alt="" />
          </div>
          <div id="product-details">
            <div>
              <h5>{products.name}</h5>
              <span>$ {products.price}</span>
            </div>
            <div>
              <span>
                <b>Tip :</b> {type?.name}
              </span>
              <span>
                <b>Stil :</b> {style?.name}
              </span>
            </div>
            <span>
              <b>Həcm :</b> Orta
            </span>
            <p>
              {products.overview} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint fugit quam suscipit corrupti quae
              laboriosam quod. Pariatur expedita, quia, magni error repudiandae
              perferendis aut inventore ab quas iste nesciunt excepturi!
            </p>
            <div>
              <button className="btn2 btn2-hover">Səbətə əlavə et</button>
              <button className="btn2 btn2-hover">İndi Al</button>
            </div>
          </div>
        </div>
      </section>
      <section id="product-items-section">
        <div className="container">
          <h5>{products.name} daxilindəki əşyalar</h5>
          <h4>Ayrıca Satın al </h4>
          <div id="product-items">
            {productsItems.map((item) => (
              <Link
                className="product-item"
                to={`/design_ideas/item/${item.id}`}
              >
                <div className="product-item-image">
                  <img src={item.itemUpload} alt="" />
                </div>
                <div className="product-item-text">
                  <p>{item.country}</p>
                  <h6>{item.itemName}</h6>
                  <span>{item.itemPrice}$</span>
                </div>
                <div className="product-item-buy">
                  <i class="fa-light fa-cart-shopping"></i>
                </div>
                <div className="product-item-like">
                  <i onClick={(e) => addLike(e)} class="fa-light fa-heart"></i>
                </div>
                <div className="product-item-view">
                  <i class="fa-solid fa-eye"></i>
                </div>
              </Link>
            ))}
            {/* <div className="product-item">
              <div className="product-item-image">
                <img src="/imgs/blancokran.jpg" alt="" />
              </div>
              <div className="product-item-text">
                <p>Çin</p>
                <h6>Krant</h6>
                <span>$200</span>
              </div>
              <div className="product-item-buy">
                <i class="fa-light fa-cart-shopping"></i>
              </div>
              <div className="product-item-like">
                <i onClick={(e) => addLike(e)} class="fa-light fa-heart"></i>
              </div>
              <div className="product-item-view">
                <i class="fa-solid fa-eye"></i>
              </div>
            </div> */}
            {/* {productsItems.map((productItem, index) => (
              // <div>

              // </div>
              // <NavLink
              //   key={index}
              //   to={`/design_ideas/item/${productItem.id}`}
              //   className="product-item"
              // >
              //   <div className="product-item-image">
              //     <img src={productItem.itemUpload} alt="" />
              //   </div>
              //   <div className="product-item-text">
              //     <div className="product-item-rating">
              //       <Rating
              //         name="half-rating-read"
              //         defaultValue={4.5}
              //         precision={0.5}
              //         readOnly
              //       />
              //     </div>
              //     <h6>{productItem.itemName}</h6>
              //     <span className="item-product-price">
              //       {productItem.itemPrice} $
              //     </span>
              //     <button>Səbətə əlavə et</button>
              //   </div>
              // </NavLink>
            ))} */}
            {/* {productsItems.map((product, index) => (
              <div key={index}>
                <div>
                  <img src={product.itemUpload} alt="" />
                  <span className="item-price"> $ {product.itemPrice}</span>
                </div>
                <div className="swiper-slide-text black">
                  <h6>{product.itemName}</h6>
                </div>
              </div>
            ))} */}
            {/* <Swiper
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
              {productsItems.map((product, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <img src={product.itemUpload} alt="" />
                    <span className="item-price"> $ {product.itemPrice}</span>
                  </div>
                  <div className="swiper-slide-text black">
                    <h6>{product.itemName}</h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>
        </div>
      </section>
      <section id="user-review-section">
        <div className="container">
          <div id="user-review-head">
            <h5>Şərhlər</h5>
          </div>
          <div id="static-review">
            <div id="static-review-user">
              <img
                src="http://www.elathemes.com/themes/divano/assets/images/user.jpg"
                alt=""
              />
            </div>
            <div id="static-review-text">
              <textarea></textarea>
            </div>
            <button>Göndər</button>
          </div>
          <div id="user-reviews">
            <div className="user-review">
              <div className="user-review-image">
                <img
                  src="http://www.elathemes.com/themes/divano/assets/images/user.jpg"
                  alt=""
                />
              </div>
              <div className="user-review-text">
                <span className="user-review-name">Ravan Khankisiyev</span>
                <p>
                  Ultricies ultricies interdum dolor sodales. Vitae feugiat
                  vitae vitae quis id consectetur. Aenean urna, lectus enim
                  suscipit eget. Tristique bibendum nibh enim dui.
                </p>
                <div className="review-icon">
                  <i class="fa-light fa-thumbs-up"></i>
                  <i class="fa-light fa-message-dots"></i>
                  <span>5 saniyə öncə</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
