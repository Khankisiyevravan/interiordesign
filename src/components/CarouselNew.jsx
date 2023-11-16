import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectFade,
} from "swiper";
import { Link } from "react-router-dom";
function CarouselNew() {
  return (
    <section id="carousel">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide style={{ backgroundImage: `url('./imgs/home3.png')` }}>
          <div className="container">
            <div className="swiper-slide-text">
              <h3>Rahatlığınız üçün evinizi bizimlə yenidən qurun.</h3>
              <p>
                Stilinizə, məkanınıza və büdcənizə uyğunlaşdırılmış fərdi dizayn
                yardımı və əl ilə seçilmiş məhsullarla xəyalınnızdakı evi həyata
                keçirin.
              </p>
              <Link to="/" className="btn">
                Daha Ətraflı
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url('./imgs/home4.jpg')` }}>
          <div className="container">
            <div className="swiper-slide-text">
              <h3>Rahatlığınız üçün evinizi bizimlə yenidən qurun.</h3>
              <p>
                Stilinizə, məkanınıza və büdcənizə uyğunlaşdırılmış fərdi dizayn
                yardımı və əl ilə seçilmiş məhsullarla xəyalınnızdakı evi həyata
                keçirin.
              </p>
              <Link to="/" className="btn">
                Daha Ətraflı
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url('./imgs/home6.jpg')` }}>
          <div className="container">
            <div className="swiper-slide-text">
              <h3>Rahatlığınız üçün evinizi bizimlə yenidən qurun.</h3>
              <p>
                Stilinizə, məkanınıza və büdcənizə uyğunlaşdırılmış fərdi dizayn
                yardımı və əl ilə seçilmiş məhsullarla xəyalınnızdakı evi həyata
                keçirin.
              </p>
              <Link to="/" className="btn">
                Daha Ətraflı
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url('./imgs/home4.jpg')` }}>
          <div className="container">
            <div className="swiper-slide-text">
              <h3>Rahatlığınız üçün evinizi bizimlə yenidən qurun.</h3>
              <p>
                Stilinizə, məkanınıza və büdcənizə uyğunlaşdırılmış fərdi dizayn
                yardımı və əl ilə seçilmiş məhsullarla xəyalınnızdakı evi həyata
                keçirin.
              </p>
              <Link to="/" className="btn">
                Daha Ətraflı
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default CarouselNew;
