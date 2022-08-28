import React from 'react';
import {Link, useSearchParams} from 'react-router-dom'
import { CartBlock } from "../cart-block";
import { ProfileBlock } from "../profile-block";
import { BlogFilter } from "../book-filer";
import { LikeBlock } from "../like-block";
import { AiOutlineSearch } from 'react-icons/ai'
import "./header.css";




export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();

    const bookQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');


  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title title">
          bookstore
        </Link>
      </div>
        <BlogFilter bookQuery={bookQuery} latest={latest} setSearchParams={setSearchParams} />
      <div className="wrapper header__cart-btn-wrapper">
        <LikeBlock />
        <CartBlock />
        <ProfileBlock />
      </div>
      <div className="menu">
        <CartBlock />
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <div className='shadow'></div>
          <div className="menu__box">
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