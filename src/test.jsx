import React  from 'react'
// import step1 from "./images/how-it-works-11.jpg";
// import step2 from "./images/how-it-works-22.jpg";
// import step3 from "./images/how-it-works-33.jpg";
// import step4 from "./images/how-it-works-44.jpg";
// import { Link } from 'react-router-dom';
function test() {
  // const [activeStep, setActiveStep] = useState(1);
  // const showStep = steps.find((s) => s.id === activeStep);
  // const [steps, setSteps] = useState([
  //   {
  //     id: 1,
  //     name: "Bizə Məkanınızı Göstərin",
  //     overview:
  //       "Bir neçə şəkil çəkin və ya iOS tətbiqimizlə otağınızı skan edin (dağınıqlıq və hamısı) və layihəniz haqqında bizə detallı məlumat verin. Öz istəkləriniz qeyd edin.",
  //     image: step1,
  //   },
  //   {
  //     id: 2,
  //     name: "Ekspert Dizaynerlə Əlaqə qurun",
  //     overview:
  //       "Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar yaradacaq.",
  //     image: step2,
  //   },
  //   {
  //     id: 3,
  //     name: "3D Dizaynlarınızı əldə edin",
  //     overview:
  //       "Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar yaradacaq.",
  //     image: step3,
  //   },
  //   {
  //     id: 4,
  //     name: "Görünüşünüzü satın alın",
  //     overview:
  //       " Eksklüziv endirimlərlə asanlıqla dizaynlarınızdan birbaşa alış-veriş edin",
  //     image: step4,
  //   },
  // ]);
  // useEffect(() => {
  //   const int = setInterval(() => {
  //     if (activeStep > 3) {
  //       setActiveStep(1);
  //     } else {
  //       setActiveStep(activeStep + 1);
  //     }
  //   }, 4000);
  //   return () => clearInterval(int);
  // });
  // const [activeStep, setActiveStep] = useState(1);

  return (
    <>
    <div className='navbar-111'>
      
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...1</div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...2</div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...3</div>
        <div class="tab-pane fade" id="nav-contact1" role="tabpanel" aria-labelledby="nav-contact1-tab1" tabindex="0">...4333333333333333</div>
        <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
      </div>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
          <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
          <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact1" type="button" role="tab" aria-controls="nav-contact1" aria-selected="false">Contact</button>
          {/* <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button> */}
        </div>
      </nav>
    </div>
    {/* <div className="interval">
          <div className="container-di">
            <div
              className='steps'
            >
              <div
                className='step-5'
              >
                <div
                  style={{ backgroundImage: `url(${showStep.image})` }}
                  className="step-img5"
                >
                   //  <img src={showStep.image} alt="" />  
                </div>
                <div
                // className="text-5"
                >
                  <p>
                    {
                      showStep.overview
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className='buttons-s'>
              {
                steps.map((s, index) => (
                  <div key={index}
                    onClick={() => setActiveStep(s.id)}
                  >
                    <div>
                      <div>
                        {
                          index + 1
                        }
                      </div>
                    </div>
                    <h5>
                      {
                        s.name
                      }
                    </h5>
                  </div>
                ))
              }
            </div> 
          </div>
        </div>
      <div className="row2-bg">
          <div data-aos='fade-right' className="step">
            <div className="step-img">
              <img src={step1} alt="" />
            </div>
            <div className="text">
              <h3>
                Bizə Məkanınızı Göstərin
              </h3>
              <p>Bir neçə şəkil çəkin və ya iOS tətbiqimizlə otağınızı skan edin (dağınıqlıq və hamısı) və layihəniz haqqında bizə detallı məlumat verin. Öz istəkləriniz qeyd edin.
              </p>
            </div>
          </div>
          <div data-aos='fade-left' className="step">

            <div className="text">
              <h3>
                Ekspert Dizaynerlə Əlaqə qurun
              </h3>
              <p>Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar yaradacaq.
              </p>
            </div>
            <div className="step-img">
              <img src={step2} alt="" />
            </div>
          </div>
          <div data-aos='fade-right' className="step">
            <div className="step-img">
              <img src={step3} alt="" />
            </div>
            <div className="text">
              <h3>
                3D Dizaynlarınızı əldə edin
              </h3>
              <p>Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar yaradacaq.
              </p>
            </div>
          </div>
          <div data-aos='fade-left' className="step">

            <div className="text">
              <h3>
                Görünüşünüzü satın alın
              </h3>
              <p>
                Eksklüziv endirimlərlə asanlıqla dizaynlarınızdan birbaşa alış-veriş edin.
              </p>
            </div>
            <div className="step-img">
              <img src={step4} alt="" />
            </div>
          </div>
          <button className='btn-header'>
            <Link to='/admin_panel1'>
              Proyektə başla
            </Link>
          </button>
        </div> */}
         {/* <div className="row-di2">
          <div className="container-di">
            {
              typeData.map((t) => (
                <Link
                  className='item-di'
                  data-aos='fade-up'
                  data-aod-delay='1000'
                  key={t.id}
                  to={t.navLink}
                >
                  <div className='item-image-di'>
                    <img src={t.image} alt="" />
                    <div className='item-text'>
                      <div className="i">
                        <i className={t.iconName}></i>
                      </div>
                      <h3>
                        {t.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div> */}
          {/* {checkData?.map((f, index) => (
                <Link
                  to={`/design_ideas/details/${f.id}`}
                  key={index}
                  className="item-di-all"
                >
                  <div
                    className="item-f-image-all"
                    style={{ backgroundImage: `url('${f.upload}')` }}
                  ></div>
                  <div className="di-pos">
                    <h4>{f.name}</h4>
                    <p>Ətraflı</p>
                  </div>
                </Link>
              ))} */}
    </>
  )
}

export default test