// import React, { useRef } from 'react'
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// import loginCss from './login.module.css';
// function Login() {
//   // const slide = useRef();
//   // const loginText = useRef();
//   // const registerText = useRef();
//   // const rightSlide = () => {
//   //   console.log(slide.current);
//   //   slide.current.classList.toggle("slide1")
//   //   loginText.current.classList.toggle('display');
//   //   registerText.current.classList.toggle('display');
//   // }
//   return (
//     <>
//       {/* <Header /> */}
//       <p>Login</p>
//       <section className={`${loginCss.sec1} login`}>
//         <div>
//           {/* <div ref={slide} className={`${loginCss.bg} ${loginCss.slide}`}> */}
//           <div ref={slide} className={loginCss.bg}>
//             <div ref={loginText} className={loginCss.bgLogin}>
//               <h1>
//                 Hesabin yoxdursa Qeydiyyat
//               </h1>
//               <button className={loginCss.btn2} onClick={() => rightSlide()}>
//                 Qeydiyyatdan keç
//               </button>
//             </div>
//             <div ref={registerText} className={`${loginCss.bgLogin} display`}>
//               <h1>
//                 Hesabin varsa daxil ol
//               </h1>
//               <button className={loginCss.btn2} onClick={() => rightSlide()}>
//                 Daxil ol
//               </button>
//             </div>
//           </div>
//           <div className={loginCss.right}>
//             <p>
//               Sign In
//             </p>
//             <div className={loginCss.labels1}>
//               <label>
//                 <div>
//                   <i className="fa-solid fa-lock"></i>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder='Name'
//                   autoComplete="off"
//                 />
//               </label>
//               <label>
//                 <div>
//                   <i className="fa-solid fa-lock"></i>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder='Password'
//                 />
//               </label>
//             </div>
//             <button className={loginCss.btn}>
//               Sign In
//             </button>
//           </div>
//           <div className={loginCss.left}>
//             <p>
//               Qeydiyyat Formu
//             </p>
//             <div className={`${loginCss.labels} labels`}>
//               <label>
//                 <div>
//                   <i className="fa-solid fa-lock"></i>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder='Name'
//                   autoComplete="off"
//                 />
//               </label>
//               <label>
//                 <div>
//                   <i className="fa-solid fa-lock"></i>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder='Surname'
//                 // width={500}
//                 />
//               </label>
//               <label>
//                 <div>
//                   <i className="fa-solid fa-lock"></i>
//                 </div>
//                 <input
//                   type="date"
//                   placeholder='Date'
//                 />
//               </label>
//               <label>
//                 <div>
//                   <i className="fa-solid fa-lock"></i>
//                 </div>
//                 <input
//                   type="number"
//                   placeholder='Number'
//                 />
//               </label>
//               <label>
//                 <div>
//                   <i className="fa-solid fa-lock"></i>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder='Password'
//                 />
//               </label>
//               <label>
//                 <div>
//                   <i className="fa-solid fa-lock"></i>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder='Re-Password'
//                 />
//               </label>
//             </div>
//             <button className={loginCss.btn}>
//               Qeydiyyat keç
//             </button>
//           </div>

//         </div>
//       </section>
//       <div className={loginCss.outline}>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default Login
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section id="login-section">
      <div className="container">
        <div className="login-head">
          <Link to="/interior-designs" id="logo">
            <img src="/imgs/logo-main.png" alt="" />
          </Link>
        </div>
        <div id="login">
          <h5>Daxil ol</h5>
          <input type="text" placeholder="E-mail və ya istifadəçi Adı" />
          <input type="password" placeholder="Şifrə" />
          <button>Daxil ol</button>
          <div id="login-save">
            <label>
              <input type="checkbox" />
              Yadda saxla
            </label>
            <span>Şifrəni Unutdun?</span>
          </div>
          <p>
            Hələ Hesabın yoxdur? <Link to="/register"> Qeydiyyatdan Keç</Link>
          </p>
          <p>Sosial şəbəkələrlə daxil ol</p>
          <div id="social-networks">
            <div className="social-network">
              <img src="/imgs/google.png" alt="" />
            </div>
            <div className="social-network">
              <img src="/imgs/twitter.png" alt="" />
            </div>
            <div className="social-network">
              <img src="/imgs/facebook.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
