import React from "react";
import './singin.css';



export const SingInPage = () => {
  return (
    <div className="sing-in">
      <div className="line"></div>
      <div className="sing-in__wrap">
        <div className="sing-in__btns tabs">
          <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked />
          <label for="tab-btn-1">sign in</label>
          <input type="radio" name="tab-btn" id="tab-btn-2" value="" />
          <label for="tab-btn-2">sign UP</label>
          <div className="sing-in__form" id="content-1">
            <div className="email">
              <div className="email__title">Email</div>
              <input placeholder="Your email" type="text" className="email__input" />
            </div>
            <div className="password">
              <div className="password__title">Password</div>
              <input placeholder="Your password" type="text" className="password__input" />
            </div>
            <div className="forgot">Forgot password ?</div>
            <button className="btn title">sign in</button>
          </div>
          <div className="sing-up__form" id="content-2">
            <div className="name">
              <div className="name__title">Name</div>
              <input placeholder="Your name" type="text" className="name__input" />
            </div>
            <div className="email">
              <div className="email__title">Email</div>
              <input placeholder="Your email" type="text" className="email__input" />
            </div>
            <div className="password">
              <div className="password__title">Password</div>
              <input placeholder="Your password" type="text" className="password__input" />
            </div>
            <div className="confirm">
              <div className="confirm__title">Confirm password</div>
              <input placeholder="Confirm your password" type="text" className="confirm__input" />
            </div>
            <button className="btn title">sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}