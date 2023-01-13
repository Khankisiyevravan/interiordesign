// import React from 'react'
import { useState, useEffect } from "react";
import "../Bootstrap.css";
// import home from "../images/home.jpg" ;
// import home2 from "../images/home2.jpg";
function Carousel() {
  const [carouselDat, setCarouselData] = useState([]);
  useEffect(() => {
    const getDatas = async () => {
      let datas = await fetch("http://localhost:7732/furniture").then((a) =>
        a.json()
      );
      setCarouselData(datas);
    };
    getDatas();
    // console.log(carouselDat);
  }, []);
  // console.log(carouselDat);
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src="./imgs/home2.jpg" className="d-block w-100" alt="..." />
            <div className="c-item-position">
              <div
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <h2>Rahatlığınız üçün evinizi bizimlə yenidən qurun.</h2>
                <p>
                  Stilinizə, məkanınıza və büdcənizə uyğunlaşdırılmış fərdi
                  dizayn yardımı və əl ilə seçilmiş məhsullarla xəyalınızdakı
                  evi həyata keçirin.
                </p>
                <button className="btn-header">Ətraflı ...</button>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src='./imgs/home.jpg' className="d-block w-100" alt="..." />
            {/* <img src={home2} className="d-block w-100" alt="..." />  */}
            <div className="c-item-position .two">
              <div data-aos="fade-left">
                <p>
                  Stilinizə, məkanınıza və büdcənizə uyğunlaşdırılmış fərdi
                  dizayn yardımı və əl ilə seçilmiş məhsullarla xəyalınızdakı
                  evi həyata keçirin.
                </p>
                <h2>Rahatlığınız üçün evinizi bizimlə yenidən qurun.</h2>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                    </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div
                        className="carousel-item active"
                    >
                        <img src='./imgs/home.jpg' className="d-block w-100" alt="..." />
                        <div className='c-item-position'>
                            <div>
                                <h2>
                                    Rahatlığınız üçün evinizi bizimlə yenidən qurun.
                                </h2>
                                <p>
                                    Stilinizə, məkanınıza və büdcənizə uyğunlaşdırılmış fərdi dizayn yardımı və əl ilə seçilmiş məhsullarla xəyalınızdakı evi həyata keçirin.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src='./imgs/home2.jpg' className="d-block w-100" alt="..." />
                        <div className='c-item-position'>
                            <div>
                                <p>
                                    Stilinizə, məkanınıza və büdcənizə uyğunlaşdırılmış fərdi dizayn yardımı və əl ilə seçilmiş məhsullarla xəyalınızdakı evi həyata keçirin.
                                </p>
                                <h2>
                                Rahatlığınız üçün evinizi bizimlə yenidən qurun.
                                </h2>
                            </div>
                        </div>
                    </div> */}

      {/* {
                        carouselDat.map((carousel) => (
                            // console.log(carousel)
                            < div
                                className={carousel.id < 2 ? "carousel-item active" : "carousel-item"}
                                key={carousel.id}
                                data-bs-interval={carousel.id < 3 ? "2000" : ""}
                            >
                                <img src={carousel.image} className="d-block w-100" alt="..." />
                            </div>
                        ))
                    } */}
      {/* </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
    </>
  );
}

export default Carousel;
