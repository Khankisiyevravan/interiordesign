import React, {
  useState,
  useEffect,
  // , useRef
} from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import Head from "../../components/Head";
import CarouselNew from "../../components/CarouselNew";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Subscribe from "../../components/Subscribe";

function Home() {
  const [counterOn, setCounterOn] = useState(false);
  const [blogDetails, setBlogDetails] = useState([]);
  const [typeData, setTypeData] = useState([]);
  useEffect(() => {
    const getBlog = async () => {
      let dataBlogs = await fetch("http://localhost:7732/blog").then((a) =>
        a.json()
      );
      setBlogDetails(dataBlogs);
    };
    getBlog();
    const getTypeData = async () => {
      let data = await fetch("http://localhost:7732/type").then((c) =>
        c.json()
      );
      setTypeData(data);
    };
    getTypeData();
  }, []);
  return (
    <>
      <Head />
      <CarouselNew />
      <section id="categories">
        <div className="container">
          <div id="left">
            <div>
              <h3>Interyer Dizayn ideyalarının kategoriyaları </h3>
              <p>
                Biz sizlər üçün müxtəlif kateqoriyalarda və fərqli stillərdə
                yüzlərlə dizayn ideyaları hazırlamağa çalışırıq. Bu
                kateqoriyalar göz oxşuyan olması üçün yüzlərlə Dizaynerlərlə
                çalışırıq .
              </p>
            </div>
          </div>
          <div id="right">
            {typeData.map((type) => (
              <Link to={type.navLink} className="category">
                <div className="category-image">
                  <img src={type.image} alt="" />
                </div>
                <div className="category-text">{type.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="welcome-interior">
        <div id="welcome-interior-head" className="container">
          <h5>INTERIORA XOŞ GƏLMİSİNİZ!</h5>
          <div id="welcome-interior-head-text">
            <h3>1980-ci il, işə başladığımız gündən</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div id="welcome-interior-main">
          <div className="container">
            <div id="statictica">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span>
                  {counterOn && <CountUp start={0} end={320} duration={5} />}+
                </span>
                <span>Mehsulların sayı</span>
              </ScrollTrigger>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span>
                  {counterOn && <CountUp start={0} end={120} duration={5} />} +
                </span>
                <span>Dizayn idealarının sayı</span>
              </ScrollTrigger>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span>
                  {counterOn && <CountUp start={0} end={15} duration={1} />}+
                </span>
                <span>Dizayn stillerinin sayı</span>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>
      <section id="design-types-section">
        <div className="container">
          <div id="design-types-head">
            <h5>DİZAYN TİPLƏRİ</h5>
          </div>
          <div id="design-types">
            <div className="design-type">
              <div className="number">
                <img src="./imgs/01.png" alt="" />
              </div>
              <div className="design-type-text">
                <h6>İnteryer Dizayn</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="design-type">
              <div className="number">
                <img src="./imgs/02.png" alt="" />
              </div>
              <div className="design-type-text">
                <h6>Ev Dizaynı</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="design-type">
              <div className="number">
                <img src="./imgs/03.png" alt="" />
              </div>
              <div className="design-type-text">
                <h6>Ofis Dizaynı</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work-principles-section">
        <div className="container">
          <h5>İŞ PROSESİMİZ</h5>
          <div id="work-principles-div">
            <div id="work-principles">
              <div className="work-principle">
                <div className="number">
                  <h5>01</h5>
                </div>
                <div className="work-principle-text">
                  <h5>Bizə Məkanınızı Göstərin</h5>
                  <p>
                    Bir neçə şəkil çəkin və ya iOS tətbiqimizlə otağınızı skan
                    edin (dağınıqlıq və hamısı) və layihəniz haqqında bizə
                    detallı məlumat verin. Öz istəklərinizi qeyd edin.
                  </p>
                </div>
              </div>
              <div className="work-principle">
                <div className="number">
                  <h5>02</h5>
                </div>
                <div className="work-principle-text">
                  <h5>Ekspert Dizaynerlə Əlaqə Qurun</h5>
                  <p>
                    Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və
                    ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar
                    yaradacaq.
                  </p>
                </div>
              </div>
              <div className="work-principle">
                <div className="number">
                  <h5>03</h5>
                </div>
                <div className="work-principle-text">
                  <h5>3D Dizaynlarınızı əldə edin</h5>
                  <p>
                    Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və
                    ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar
                    yaradacaq.
                  </p>
                </div>
              </div>
              <div className="work-principle">
                <div className="number">
                  <h5>04</h5>
                </div>
                <div className="work-principle-text">
                  <h5>Görüşünüzü Satın Alın</h5>
                  <p>
                    Eksklüziv endirimlərlə asaanlıqla dizaynlarınızdan birbaşa
                    alış-veriş edin.
                  </p>
                </div>
              </div>
            </div>
            <div id="work-principles-image">
              <div id="work-princip-first">
                <img src="./imgs/worker-princip1.png" alt="" />
              </div>
              <div id="work-princip-second">
                <img src="./imgs/worker-princip2.png" alt="" />
              </div>
              <div id="work-princip-third">
                <img src="./imgs/worker-princip3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="benefits">
        <div className="container">
          <div className="benefit">
            <div className="benefit-icon">
              <i className="fa-regular fa-gift"></i>
            </div>
            <div className="benefit-text">
              <h5>Hədiyyənizi alın</h5>
              <span>Siz yeni müştərisiniz?</span>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-icon">
              <i className="fa-regular fa-truck"></i>
            </div>
            <div className="benefit-text">
              <h5>Hədiyyənizi alın</h5>
              <span>Siz yeni müştərisiniz?</span>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-icon">
              <i className="fa-light fa-clipboard-check"></i>
            </div>
            <div className="benefit-text">
              <h5>Hədiyyənizi alın</h5>
              <span>Siz yeni müştərisiniz?</span>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit-icon">
              <i className="fa-light fa-star"></i>
            </div>
            <div className="benefit-text">
              <h5>Hədiyyənizi alın</h5>
              <span>Siz yeni müştərisiniz?</span>
            </div>
          </div>
        </div>
      </section>
      <section id="comments-section">
        <div className="container">
          <div id="comments-section-text">
            <h5>ŞƏRHLƏR</h5>
            <h4>Müştərilərimizin səsini dinləyin.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor.
            </p>
          </div>
          <div id="comments-carousel">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="comment-div">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="comment-author">
                    <div className="comment-author-image">
                      <img src="./imgs/author-picture1.png" alt="" />
                    </div>
                    <div className="comment-author-text">
                      <span className="author-name">Səməd Əliyev</span>
                      <span className="author-location">Bakı, Azərbaycan</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="comment-div">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="comment-author">
                    <div className="comment-author-image">
                      <img src="./imgs/author-picture1.png" alt="" />
                    </div>
                    <div className="comment-author-text">
                      <span className="author-name">Səməd Əliyev</span>
                      <span className="author-location">Bakı, Azərbaycan</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="comment-div">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="comment-author">
                    <div className="comment-author-image">
                      <img src="./imgs/author-picture1.png" alt="" />
                    </div>
                    <div className="comment-author-text">
                      <span className="author-name">Səməd Əliyev</span>
                      <span className="author-location">Bakı, Azərbaycan</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="comment-div">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="comment-author">
                    <div className="comment-author-image">
                      <img src="./imgs/author-picture1.png" alt="" />
                    </div>
                    <div className="comment-author-text">
                      <span className="author-name">Səməd Əliyev</span>
                      <span className="author-location">Bakı, Azərbaycan</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="comment-div">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="comment-author">
                    <div className="comment-author-image">
                      <img src="./imgs/author-picture1.png" alt="" />
                    </div>
                    <div className="comment-author-text">
                      <span className="author-name">Səməd Əliyev</span>
                      <span className="author-location">Bakı, Azərbaycan</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="comment-div">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="comment-author">
                    <div className="comment-author-image">
                      <img src="./imgs/author-picture1.png" alt="" />
                    </div>
                    <div className="comment-author-text">
                      <span className="author-name">Səməd Əliyev</span>
                      <span className="author-location">Bakı, Azərbaycan</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section id="galery-section">
        <div className="container">
          <h5>QALERAYAMIZ</h5>
          <div id="galery-top">
            <h4>
              Qaleriyanıza <br /> nəzər salın
            </h4>
            <div id="galery-btns">
              <Link className="btn2" to="/contact_us">
                Bizimlə Əlaqə
              </Link>
              <Link className="btn2 btn2-hover" to="/home">
                Galeriya
              </Link>
            </div>
          </div>
          <div id="galery-view">
            <div className="galery-view-card">
              <img src="./imgs/galery-view1.png" alt="" />
            </div>
            <div className="galery-view-card">
              <img src="./imgs/galery-view2.png" alt="" />
            </div>
            <div className="galery-view-card">
              <img src="./imgs/galery-view3.png" alt="" />
            </div>
            <div className="galery-view-card">
              <img src="./imgs/galery-view4.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="low-price-section">
        <div className="container">
          <div id="low-price-text">
            <div id="low-price-head">
              <h5>ENDIRIM</h5>
            </div>
            <div id="low-price-main">
              <h4>Stul və kreslolara endirim</h4>
              <p>
                Relax, get comfortable and let yourself go. Once you try one of
                these sofas and armchairs you won't want any others. May the
                style be with you!
              </p>
              <button>Daha çox öyrən</button>
            </div>
          </div>
          <div id="low-price-image">
            <img src="/imgs/low-price.png" alt="" />
            <div id="low-price-percent">-35%</div>
          </div>
        </div>
      </section>
      <section id="summary-blog-section">
        <div className="container">
          <h5>BLOGLAR</h5>
          <div id="carousel-blog">
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
              {blogDetails.map((blog, index) => (
                <SwiperSlide key={index}>
                  <div className="blog-image">
                    <img src={blog.upload} alt="" />
                  </div>
                  <div className="blog-text">
                    <span>Salim Əliyev tərəfindən</span>
                    <span>23 sentyabr, 2022</span>
                    <p>Lorem ipsum dolor sit ...</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
}

export default Home;
