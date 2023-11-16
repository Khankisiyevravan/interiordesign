import React, { useState } from "react";
import { useRef } from "react";
import Head from "../../components/Head";
import validator from "validator";
function Contact() {
  const [message, setMessage] = useState("");
  const emailRef = useRef();
  const btnRef = useRef();
  const validateEmail = (e) => {
    var email = e.target.value;
    if (email.length > 0) {
      if (validator.isEmail(email)) {
        setMessage("");
        emailRef.current.style.border = "2px solid green";
      } else {
        setMessage("Please, enter valid Email!");
        emailRef.current.style.border = "2px solid red";
      }
    } else {
      setMessage("");
      emailRef.current.style.border = "2px solid #cda274";
    }
  };
  const sendMail = () => {
    console.log("salam");
    alert("Mesajınız uğurla öndərildi");
  };
  return (
    <>
      <Head />
      <section
        className="page-header"
        style={{ backgroundImage: `url('/interiordesign/imgs/about-us-bg2.jpeg')` }}
      >
        <div className="container">
          <h2>Bizimlə əlaqə</h2>
        </div>
      </section>
      <section id="contact-information">
        <div className="container">
          <span>
            Tel <b>+994 (12) 523 45 32</b>
          </span>
          <span>
            Mobil <b> +994 (55) 349 99 90/91</b>
          </span>
          <span>
            {" "}
            E-mail <b>interior.032@gmail.com</b>
          </span>
        </div>
      </section>
      <section id="contact-us">
        <div className="container">
          <h5>SUALINIZ VAR?</h5>
          <div id="contact-us-main">
            <form action="">
              <div className="form-group">
                <input type="text" placeholder="ADINIZ və SOYADINIZ" />
              </div>
              {/* <div className="form-group">
             <input type="text" placeholder="Soyad" />
           </div> */}
           <div className="form-group">
             <input
               type="text"
               placeholder="Email"
               id="userEmail"
               ref={emailRef}
               onChange={(e) => validateEmail(e)}
             />
             <span style={{ fontWeight: "bold", color: "red" }}>{message}</span>
           </div>
            <div className="form-group">
             <input type="text" placeholder="phone number" />
           </div>
           <div className="form-group">
             <textarea placeholder="məzmunu yazın..." ></textarea>
           </div>
            <button onClick={()=>sendMail()} type="reset" ref={btnRef}>
            Göndər
           </button>
            </form>
            <div className="map">
              <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.178979863156!2d49.822026350897495!3d40.382725679267956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1sen!2s!4v1664549196687!5m2!1sen!2s"
            loading="lazy"
           ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
// import Header from "../../components/Header";
// import React, { useState, useRef } from "react";
// import validator from "validator";
// function Contact() {
//   const [message, setMessage] = useState("");
//   const emailRef = useRef();
//   const btnRef = useRef();
//   const validateEmail = (e) => {
//     var email = e.target.value;
//     if (email.length > 0) {
//       if (validator.isEmail(email)) {
//         setMessage("");
//         emailRef.current.style.border = "2px solid green";
//       } else {
//         setMessage("Please, enter valid Email!");
//         emailRef.current.style.border = "2px solid red";
//       }
//     } else {
//       setMessage("");
//       emailRef.current.style.border = "2px solid #cda274";
//     }
//   };
//   const sendMail = ()=>{
//     console.log('salam');
//     alert("Mesajınız uğurla öndərildi")
//   }
//   return (
//     <>
//       <section className="sec1" id="contact-us">
//         <Header />

//         <div
//           className="di-head"
//           style={{
//             backgroundImage: `url(/imgs/contact-bg3.jpg)`,
//             height: "400px",
//           }}
//         >
//           <p>Bizimlə Əlaqə</p>
//         </div>
//       </section>
//       <section className="form">
//         <form action="">
//           <div className="form-group">
//             <input type="text" placeholder="Ad" />
//           </div>
//           <div className="form-group">
//             <input type="text" placeholder="Soyad" />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Email"
//               id="userEmail"
//               ref={emailRef}
//               onChange={(e) => validateEmail(e)}
//             />
//             <span style={{ fontWeight: "bold", color: "red" }}>{message}</span>
//           </div>
//           <div className="form-group">
//             <input type="text" placeholder="phone number" />
//           </div>
//           <div className="form-group full">
//             <textarea ></textarea>
//           </div>
//           <button onClick={()=>sendMail()} type="reset" ref={btnRef}>
//             Göndər
//           </button>
//         </form>
//         <div className="map">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.178979863156!2d49.822026350897495!3d40.382725679267956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1sen!2s!4v1664549196687!5m2!1sen!2s"
//             style={{ width: "600px", height: "500px", border: "0" }}
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Contact;
