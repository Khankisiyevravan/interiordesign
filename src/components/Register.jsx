import React from "react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <section id="login-section">
      <div className="container">
        <div className="login-head">
          <Link to="/interior-designs" id="logo">
            <img src="/interiordesign/imgs/logo-main.png" alt="" />
          </Link>
        </div>
        <div id="login" style={{height:"605px"}}>
          <h5>Qeydiyyatdan keç</h5>
          <input type="text" placeholder="Adınız və Soyadınız"/>
          <input type="text" placeholder="E-mail və ya telefon nömrəsi" />
          <input type="password" placeholder="Şifrə" />
          <button>Daxil ol</button>
          <div id="login-save">
            <label>
              <input type="checkbox" />
              Yadda saxla
            </label>
          </div>
          <p>
            Mövcud hesabın var? <Link to="/login"> Daxil ol</Link>
          </p>
          <p>Sosial şəbəkələrlə qeydiyyatdan keç</p>
          <div id="social-networks">
            <div className="social-network">
              <img src="/interiordesign/imgs/google.png" alt="" />
            </div>
            <div className="social-network">
              <img src="/interiordesign/imgs/twitter.png" alt="" />
            </div>
            <div className="social-network">
              <img src="/interiordesign/imgs/facebook.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
