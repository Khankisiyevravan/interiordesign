import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import Rating from "@mui/material/Rating";

function ItemDetails() {
  //   const params = new URLSearchParams(window.location.search);
  //   console.log(params.get("id"));
  //   const id = params.get("id");
  //   console.log(id);
  const { id } = useParams();
  const [ItemDetail, setItemDetail] = useState([]);
  //   console.log(id);
  useEffect(() => {
    const getItemDetails = async () => {
      let data = await fetch(`http://localhost:7732/item/${id}`).then((p) =>
        p.json()
      );
      setItemDetail(data);
      console.log(data);
    };
    getItemDetails().then(console.log(ItemDetail));
  }, []);
  return (
    <>
      <Head />
      <section
        className="page-header designideas"
        style={{
          backgroundImage: `url('../../imgs/design-ideas-page-bg.jpg')`,
        }}
      >
        <div className="container">
          <h2>Item details</h2>
        </div>
      </section>
      <section id="product-item-section">
        <div className="container">
          <div id="item-image">
            <img src={ItemDetail.itemUpload} alt="" />
          </div>
          <div id="item-text">
            <div id="item-head">
              <h5>{ItemDetail.itemName}</h5>{" "}
              <span>$ {ItemDetail.itemPrice}</span>
            </div>
            <p>{ItemDetail.overview}</p>
            <span>
              <b>Ölçüləri :</b> {ItemDetail.dimensions}
            </span>
            <span>
              <b>Rəng :</b> {ItemDetail.color}
            </span>
            <span>
              <b>Ölkə :</b> {ItemDetail.country}
            </span>
            <span>
              <b>Material :</b> {ItemDetail.material}
            </span>
            <p>
              <b>Təlimat :</b> {ItemDetail.instructions}
            </p>
          </div>
          {/* <div id="item-image">
            <img src={ItemDetail.itemUpload} alt="" />
          </div>
          <div id="item-text">
            <h4>{ItemDetail.itemName}</h4>
            <div id="rating">
              <Rating
                name="half-rating-read"
                defaultValue={4.0}
                precision={0.5}
                readOnly
              />
              <span id="customer">(1 review customer)</span>
            </div>
            <div id="price">
              <span>Qiymət : {ItemDetail.itemPrice}$</span>
              <span>Ölçüləri : {ItemDetail.dimensions}</span>
              <span>Kateqorisi : Xalça</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco,Proin
              lectus ipsum, gravida et mattis vulputate, tristique ut lectus
            </p>
            <div id="basket-b">
              <button className="btn2-hover btn2">Səbətə əlavə et</button>
              <button className="btn2-hover btn2">Favorilərə əlavə et</button>
            </div>
          </div> */}
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

export default ItemDetails;
