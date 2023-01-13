// import React from 'react';
import Carousel from "../../components/Carousel";
import step1 from "../../images/how-it-works-11.jpg";
import step2 from "../../images/how-it-works-22.jpg";
import step3 from "../../images/how-it-works-33.jpg";
import step4 from "../../images/how-it-works-44.jpg";
// import interiorDesign from '';
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CountUp from "react-countup";
import React, { useState, useEffect, useRef } from "react";
import ScrollTrigger from "react-scroll-trigger";
// import { useRef } from "react";
function Homepages() {
  // const [seconds, setSeconds] = useState(1);
  const [counterOn, setCounterOn] = useState(false);
  const inputsendmail = useRef();

  // console.log(activeStep);
  const [steps, setSteps] = useState([
    {
      id: 1,
      name: "Bizə Məkanınızı Göstərin",
      overview:
        "Bir neçə şəkil çəkin və ya iOS tətbiqimizlə otağınızı skan edin (dağınıqlıq və hamısı) və layihəniz haqqında bizə detallı məlumat verin. Öz istəkləriniz qeyd edin.",
      image: step1,
    },
    {
      id: 2,
      name: "Ekspert Dizaynerlə Əlaqə qurun",
      overview:
        "Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar yaradacaq.",
      image: step2,
    },
    {
      id: 3,
      name: "3D Dizaynlarınızı əldə edin",
      overview:
        "Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar yaradacaq.",
      image: step3,
    },
    {
      id: 4,
      name: "Görünüşünüzü satın alın",
      overview:
        " Eksklüziv endirimlərlə asanlıqla dizaynlarınızdan birbaşa alış-veriş edin",
      image: step4,
    },
  ]);
  const [user, setUser] = useState({
    username: "",
  });
  const handleInput = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const sendMail = async () => {
    const sendData = inputsendmail.current.value;
    console.log(sendData);
    await fetch("http://localhost:7732/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  return (
    <>
      <Header />
      <section className="carousel-section">
        <div className="row1-bg">
          <Carousel />
        </div>
      </section>
      <section className="sec1 homepage">
        <div className="container">
          <div className="design-categories-div">
            <div id="design-category-header">Bizdə dizayn tipləri</div>
            <div id="design-categories">
              <div className="design-category">
                <div className="design_category_img">
                  <img src="./imgs/inoteriordesign-logo.jpg" alt="" />
                </div>
                <div className="design_category_text">
                  <h5>Interiyer Dizayn</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore accusantium doloribus ducimus dolore suscipit, harum
                    saepe enim quod. Sit, temporibus.
                  </p>
                </div>
              </div>
              <div className="design-category">
                <div className="design_category_img">
                  <img src="./imgs/homedesign-logo.jpg" alt="" />
                </div>
                <div className="design_category_text">
                  <h5>Ev Dizayn</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore accusantium doloribus ducimus dolore suscipit, harum
                    saepe enim quod. Sit, temporibus.
                  </p>
                </div>
              </div>
              <div className="design-category">
                <div className="design_category_img">
                  <img src="./imgs/officedesign-logo.png" alt="" />
                </div>
                <div className="design_category_text">
                  <h5>Ofis Dizayn</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore accusantium doloribus ducimus dolore suscipit, harum
                    saepe enim quod. Sit, temporibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="welcome_interior">
        <div className="container">
          <div className="welcome_interior_text">
            <div className="welcome_interior_text_top">
              <h5>INTERYERƏ XOŞ GƏLMİSİNİZ</h5>
              <h3>
                1980-ci ildən işə <br /> başladığımız gündən <br /> bu yana
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit libero expedita odio molestias quis corporis illum
                sed repellendus doloribus esse perspiciatis id mollitia, alias,
                sint laudantium. A assumenda minima nisi!
              </p>
              <ul>
                <li>
                  <i class="fa-regular fa-circle-check"></i> Estetik üslubların
                  müxtəlifliyi
                </li>
                <li>
                  <i class="fa-regular fa-circle-check"></i> Rəng çarxı haqqında
                  anlayış
                </li>
                <li>
                  <i class="fa-regular fa-circle-check"></i> Yaradıcı göz və
                  detallara diqqət
                </li>
                <li>
                  <i class="fa-regular fa-circle-check"></i> Davamlı təcrübə
                  haqqında biliklər
                </li>
              </ul>
            </div>
            <div className="welcome_interior_text_bottom">
              <ScrollTrigger
                id="welcome_items_number"
                className="welcome_interior_product"
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span className="product_number">
                  {counterOn && <CountUp start={0} end={320} duration={10} />}+
                </span>
                <span className="product_name">Mehsulların sayı</span>
              </ScrollTrigger>
              <ScrollTrigger
                id="welcome_design_idea"
                className="welcome_interior_product"
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span className="product_number">
                  {counterOn && <CountUp start={0} end={120} duration={10} />} +
                </span>
                <span className="product_name">Dizayn idealarının sayı</span>
              </ScrollTrigger>
              <ScrollTrigger
                id="welcome_design_style"
                className="welcome_interior_product"
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span className="product_number">
                  {counterOn && <CountUp start={0} end={15} duration={1} />}+
                </span>
                <span className="product_name">Dizayn stillerinin sayı</span>
              </ScrollTrigger>
            </div>
          </div>
          <div className="welcome_interior_image">
            <img src="./imgs/welcome-img.jpg" alt="" />
          </div>
        </div>
      </section>
      <section id="connect-steps">
        <div className="container">
          {steps.map((step, index) => (
            <div className="connect-step" data-step={index + 1} key={index}>
              <div className="step-image">
                <img src={step.image} alt="" />
              </div>
              <div className="step-text">
                <h3>{step.name}</h3>
                <p>{step.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="subscribe">
        <div className="container-di">
          <div id="subscribe-text">
            <h3>Əlaqədə qal!</h3>
            <p>
              Bütün yeni interyer xüsusiyyətləri haqqında ilk xəbərdar olun!
            </p>
            <div>
              <input
                placeholder="email ve ya elaqe nomresi daxil et ..."
                onChange={(e) => handleInput(e)}
                ref={inputsendmail}
                type="text"
              />
              <button onClick={() => sendMail()}>İndi Abunə ol</button>
            </div>
          </div>
        </div>
      </section>
      <section id="instagram">
        <div className="container">
          <div id="instagram-about">
            <div id="instagram-logo">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <span id="instagram-name">#interior_design_032</span>
          </div>
          <div id="posts">
            <div className="instagram-post">
              <img src="./imgs/instagram1.jpg" alt="" />
            </div>
            <div className="instagram-post">
              <img src="./imgs/instagram2.jpg" alt="" />
            </div>
            <div className="instagram-post">
              <img src="./imgs/instagram3.jpg" alt="" />
            </div>
            <div className="instagram-post">
              <img src="./imgs/instagram4.jpg" alt="" />
            </div>
            <div className="instagram-post">
              <img src="./imgs/instagram5.jpg" alt="" />
            </div>
            <div className="instagram-post">
              <img src="./imgs/instagram6.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="interior_benefits">
        <div className="container">
          <div id="benefits">
            <div className="benefit">
              <i class="fa-solid fa-gift"></i>
              <div className="benefit-text">
                <span>Hədiyyənizi alın</span>
                <p>Siz yeni müştərisiniz?</p>
              </div>
            </div>
            <div className="benefit">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M23.948.042c-.413-.028-.817-.042-1.214-.042-8.6 0-13.497 6.557-15.278 11.833l4.727 4.727c5.428-1.944 11.817-6.66 11.817-15.168 0-.44-.017-.89-.052-1.35zm-11.277 14.178l-2.883-2.883c1.221-2.859 4.691-8.945 12.199-9.32-.251 5.775-4.041 9.932-9.316 12.203zm5.471 1.538c-.547.373-1.09.71-1.628 1.011-.187.891-.662 1.842-1.351 2.652-.002-.576-.162-1.156-.443-1.738-.495.225-.966.418-1.414.588.66 1.709-.012 2.971-.915 4.154 1.296-.098 2.656-.732 3.728-1.805 1.155-1.155 1.967-2.823 2.023-4.862zm-11.82-6.469c-.579-.28-1.158-.438-1.732-.441.803-.681 1.744-1.153 2.626-1.345.314-.552.667-1.097 1.039-1.633-2.039.055-3.708.867-4.864 2.023-1.071 1.071-1.706 2.433-1.804 3.728 1.184-.904 2.446-1.576 4.155-.914.173-.471.366-.944.58-1.418zm7.738.663c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0c.391.392.391 1.024 0 1.415s-1.024.39-1.414-.001zm4.949-4.951c-.78-.78-2.047-.78-2.828 0-.781.781-.781 2.049 0 2.829.781.781 2.048.781 2.829 0 .78-.78.78-2.047-.001-2.829zm-1.908 1.911c-.273-.273-.273-.718 0-.99.271-.273.717-.273.99 0 .272.272.271.717 0 .99-.274.272-.718.272-.99 0zm-15.132 12.666l-.906-.906 5.208-5.188.906.906-5.208 5.188zm4.979 1.857l-.906-.906 3.636-3.664.906.906-3.636 3.664zm-6.042 2.565l-.906-.906 6.448-6.438.906.906-6.448 6.438z"/></svg>
              <div className="benefit-text">
                <span>Sürətli çatdırılma</span>
                <p>Biz bütün dünyaya göndəririk</p>
              </div>
            </div>
            <div className="benefit">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12h2c0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10c-2.777 0-5.287 1.141-7.099 2.977l2.061 2.061-6.962 1.354 1.305-7.013 2.179 2.18c2.172-2.196 5.182-3.559 8.516-3.559 6.627 0 12 5.373 12 12zm-13-6v8h7v-2h-5v-6h-2z"/></svg>
              <div className="benefit-text">
                <span>Pul geri zəmanət</span>
                <p>30 günlük pul geri zəmanəti</p>
              </div>
            </div>
            <div className="benefit">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M21 4l-5-3h-8l-5 3-3 5 12 14 12-14.042-3-4.958zm-13.287 8.974l1.463 3.658-4.379-5.108 2.916 1.45zm6.668-4.974l.58 2.905-.038.095h-5.846l-.038-.095.58-2.905h4.762zm-.258 5l-2.123 5.307-2.123-5.307h4.246zm2.164-.026l2.881-1.44-4.332 5.069 1.451-3.629zm4.953-4.713l-4.334 2.168-.573-2.864 3.651-1.38 1.256 2.076zm-12.685-5.261h6.891l2.824 1.694-3.453 1.306h-5.64l-3.491-1.279 2.869-1.721zm-4.561 3.23l3.671 1.345-.571 2.856-4.329-2.152 1.229-2.049z"/></svg>
              <div className="benefit-text">
                <span>VIP endirimlər</span>
                <p>VIP üzv olun</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div
          // data-aos='fade-up'
          data-aos-delay="500"
          className="row3-bg"
        >
          <div className="text">
            <h3>Interiyer dizayn stili nədir ?</h3>
            <p>
              İnteryer dizaynı, məkandan istifadə edən insanlar üçün daha sağlam
              və estetik cəhətdən xoş bir mühitə nail olmaq üçün binanın daxili
              hissəsini yaxşılaşdırmaq sənəti və elmidir. İnteryer dizayneri bu
              cür təkmilləşdirmə layihələrini planlaşdıran, araşdıran,
              əlaqələndirən və idarə edən şəxsdir.İnteryer dizaynı konseptual
              inkişaf, məkanın planlaşdırılması, sahənin yoxlanılması,
              proqramlaşdırma, tədqiqat, layihənin maraqlı tərəfləri ilə
              ünsiyyət, tikintinin idarə edilməsi və dizaynın icrasını əhatə
              edən çoxşaxəli bir peşədir.
            </p>
            <button className="btn-header">
              <Link to="/stylequiz">Ətraflı...</Link>
            </button>
          </div>
          <div className="image">
            <img src="./imgs/interior.jpg" alt="" />
          </div>
          <div className="image2"></div>
        </div>
      </section>  */}

      {/* <Footer /> */}
    </>
  );
}

export default Homepages;
