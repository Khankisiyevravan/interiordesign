// import React from "react";
// import Header from "../../components/Header";

// function About() {
//   return (
//     <>
//       <section id="about-us" className="sec1">
//         <Header />

//         <div
//           className="di-head"
//           style={{
//             backgroundImage: "url(./imgs/about-us-bg.jpg)",
//             height: "400px",
//           }}
//         >
//           <p>Haqqimizda</p>
//         </div>
//       </section>
//       <section id="partner">
//         <div className="container">
//           <div id="partner-image">
//             <img src="./imgs/about-us-img1.jpg" alt="" />
//           </div>
//           <div id="partner-text">
//             <h4>
//               Ruhlandırıcı və <br /> Daha Yaxşı Yaşayış Sahələrində Tərəfdaş
//             </h4>
//             <p>
//               Müştərilərimiz üçün tam olaraq düzgün dizaynerləri tapmaqda sübut
//               edilmiş təcrübəmiz var və konstitusiyaya uyğun olaraq günümüzün
//               bəzi interyer dizaynerlərinə misilsiz giriş təklif edirik!
//             </p>
//             <div>
//               “Möhtəşəm dizayn estetikası çox vaxt güclü ilham köklərindən
//               yaranır. Söhbətə gəldikdə, bu, olduqca hərfi və həqiqətən tərcümə
//               edir. Təbiətlə demək olar ki, göbək bağı birləşir”
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="team-work">
//         <div className="container">
//           <div id="work-header">
//             <h4>Komandamızla tanış olun</h4>
//             <p>
//               Memar və dizaynerlərimiz ətraf mühiti daim və diqqətlə izləyir,
//               dəyişiklikləri qəbul edir və inkişaf etdirir, moda və memarlıq,
//               eləcə də sosioloji dəyişiklikləri araşdırır və onları unikal
//               dizayna çevirir.
//             </p>
//           </div>
//           <div id="workers">
//             <div className="worker">
//               <div className="worker-top">
//                 <div>
//                   <h6 className="worker-name">Khankisiyev Ravan</h6>
//                   <span>Front-end Developer</span>
//                 </div>
//               </div>
//               <div className="worker-image">
//                 <img src="./imgs/worker-1.jpg" alt="" />
//               </div>
//               <div className="worker-bottom">
//                 <div>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                 </div>
//               </div>
//             </div>
//             <div className="worker">
//               <div className="worker-top">
//                 <div>
//                   <h6 className="worker-name">Khankisiyev Ravan</h6>
//                   <span>Front-end Developer</span>
//                 </div>
//               </div>
//               <div className="worker-image">
//                 <img src="./imgs/worker-2.jpg" alt="" />
//               </div>
//               <div className="worker-bottom">
//                 <div>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                 </div>
//               </div>
//             </div>
//             <div className="worker">
//               <div className="worker-top">
//                 <div>
//                   <h6 className="worker-name">Khankisiyev Ravan</h6>
//                   <span>Front-end Developer</span>
//                 </div>
//               </div>
//               <div className="worker-image">
//                 <img src="./imgs/worker-3.jpg" alt="" />
//               </div>
//               <div className="worker-bottom">
//                 <div>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                 </div>
//               </div>
//             </div>
//             <div className="worker">
//               <div className="worker-top">
//                 <div>
//                   <h6 className="worker-name">Khankisiyev Ravan</h6>
//                   <span>Front-end Developer</span>
//                 </div>
//               </div>
//               <div className="worker-image">
//                 <img src="./imgs/worker-4.jpg" alt="" />
//               </div>
//               <div className="worker-bottom">
//                 <div>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-facebook-f"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="information">

//       </section>
//     </>
//   );
// }

// export default About;
import React from "react";
import Head from "../../components/Head";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function About() {
  return (
    <>
      <Head />
      <section
        className="page-header"
        style={{ backgroundImage: `url('./imgs/about-us-bg2.jpeg')` }}
      >
        <div className="container">
          <h2>Haqqımızda</h2>
        </div>
      </section>
      <section id="history">
        <div className="container">
          <h5>TARİXİMİZ</h5>
        </div>
        <div id="history-bottom">
          <div id="history-image">
            <img src="./imgs/about-history-bg.png" alt="" />
          </div>
          <div id="history-text">
            <h3>1980-ci il, işə başladığımız gündən</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <Link to="/contact_us" className="btn2">
              Bizimlə əlaqə saxla
            </Link>
          </div>
        </div>
      </section>
      <section id="start-company-section">
        <div className="container">
          <h5>NECƏ BAŞLADIQ</h5>
          <div id="start-company">
            <div id="start-company-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
            <div id="start-company-image">
              <div id="start-company-image1">
                <img src="./imgs/start-company-bg1.png" alt="" />
              </div>
              <div id="start-company-image2">
                <img src="./imgs/start-company-bg2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team-work-section">
        <div className="container">
          <div id="team-work-head">
            <h5>KOMANDAMIZ</h5>
            <Link className="btn2 btn2-hover" to="/">
              Komandamıza Qoşulun
            </Link>
          </div>
          <h4>
            Komandamızla <br /> tanış olun
          </h4>
          <div id="team-work">
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
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <img src="./imgs/team-person1.png" alt="" />
                </div>
                <div className="swiper-slide-text">
                  <h6>Dizayner</h6>
                  <span>LOREM IPSUM</span>
                  <p>
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nost
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./imgs/team-person2.png" alt="" />
                </div>
                <div className="swiper-slide-text">
                  <h6>Dizayner</h6>
                  <span>LOREM IPSUM</span>
                  <p>
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nost
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./imgs/team-person3.png" alt="" />
                </div>
                <div className="swiper-slide-text">
                  <h6>Dizayner</h6>
                  <span>LOREM IPSUM</span>
                  <p>
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nost
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./imgs/team-person4.png" alt="" />
                </div>
                <div className="swiper-slide-text">
                  <h6>Dizayner</h6>
                  <span>LOREM IPSUM</span>
                  <p>
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nost
                  </p>
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
              <Link className="btn2 btn2-hover" to="/">
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
    </>
  );
}

export default About;
