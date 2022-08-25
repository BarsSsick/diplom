import React from 'react';
import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import { ProfileBlock } from "../profile-block";
import { LikeBlock } from "../like-block";
import { AiOutlineSearch } from 'react-icons/ai'
import "./header.css";




export const Header = () => {


  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title title">
          bookstore
        </Link>
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <AiOutlineSearch className="header__input-search" size={20} />
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <LikeBlock />
        <CartBlock />
        <ProfileBlock />
      </div>
      <div className="menu">
        <CartBlock />
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <div className='shadow'></div>
          <div class="menu__box">
            <div className="line"></div>
            <div className="header__input">
              <input placeholder="Search" type="text" />
              <AiOutlineSearch className="header__input-search" size={20} />
            </div>
            <Link to="/like" className="favorites">
              Favorites
            </Link>
            <Link to="/order" className="cart">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};