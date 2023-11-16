import React, { useRef } from "react";
import styleMain from "./loginMain.module.css";
function LoginMain() {
  const signIn = useRef();
  const signUp = useRef();
  const container = useRef();
  const signInFunc = () => {
    container.current.classList.remove(`${styleMain.sign_up_mode}`);
  };
  const signUpFunc = () => {
    container.current.classList.add(`${styleMain.sign_up_mode}`);
  };
  return (
    <div>
      <div className={styleMain.container} ref={container}>
        <div className={styleMain.forms_container}>
          <div className={styleMain.signin_signup}>
            <form action="#" className={styleMain.sign_in_form}>
              <h2 className={styleMain.title}>Sign in</h2>
              <div className={styleMain.input_field}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className={styleMain.input_field}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input
                type="submit"
                value="Login"
                className={`${styleMain.btn} solid`}
              />
              <p className={styleMain.social_text}>
                Or Sign in with social platforms
              </p>
              <div className={styleMain.social_media}>
                <a href="#" className={styleMain.social_icon}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className={styleMain.social_icon}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className={styleMain.social_icon}>
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className={styleMain.social_icon}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form action="#" className={styleMain.sign_up_form}>
              <h2 className="title">Sign up</h2>
              <div className={styleMain.input_field}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className={styleMain.input_field}>
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className={styleMain.input_field}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className={styleMain.btn} value="Sign up" />
              <p className={styleMain.social_text}>
                Or Sign up with social platforms
              </p>
              <div className={styleMain.social_media}>
                <a href="#" className={styleMain.social_icon}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className={styleMain.social_icon}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className={styleMain.social_icon}>
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className={styleMain.social_icon}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className={styleMain.panels_container}>
          <div className={`${styleMain.panel} ${styleMain.left_panel}`}>
            <div className={styleMain.content}>
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className={`${styleMain.btn} ${styleMain.transparent}`}
                id="sign-up-btn"
                onClick={() => signUpFunc()}
              >
                Sign up
              </button>
            </div>
            <img src="/interiordesign/imgs/loginMain2.svg" style={{marginRight:"150px" , width:"300px"}} className={styleMain.image} alt="" />
          </div>
          <div className={`${styleMain.panel} ${styleMain.right_panel}`}>
            <div className={styleMain.content}>
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className={`${styleMain.btn} ${styleMain.transparent}`}
                id="sign-in-btn"
                onClick={() => signInFunc()}
              >
                Sign in
              </button>
            </div>
            <img src="/interiordesign/imgs/loginMain.svg" className={styleMain.image}  style={{ width:"300px"}} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMain;
