import React from "react";
import { useSelector } from 'react-redux';
import { BookCover } from "../../components/book-cover";
import { BookBuy } from "../../components/book-buy";
import { CgArrowLongLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import { BookLike } from "../../components/book-like/book-like";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import "./book-page.css";


export const BookPage = () => {
  const book = useSelector(state => state.books.currentbook);

  if (!book) return null

  return (
    <div className="book-page">
      <div className="line"></div>
      <Link to="/" >
        <CgArrowLongLeft
          size={55}
          className="arrow-back"
        />
      </Link>
      <h1 className="book-page__title title">{book.title}</h1>
      <div className="book-page__content">
        <div className="book-page__left">
          <div className="book-item__img">
            <BookCover image={book.image} />
            <BookLike book={book} />
          </div>
        </div>
        <div className="book-page__right">
          <div className="line"></div>
          <div className="book-item__botom">
            <span className="book-buy__price">${book.price.split('').slice(1).join('')}</span>
            <div className="rating">
              <AiFillStar width={14} color="#4C4B5E" />
              <AiFillStar width={14} color="#4C4B5E" />
              <AiFillStar width={14} color="#4C4B5E" />
              <AiFillStar width={14} color="#4C4B5E" />
              <AiOutlineStar width={14} color="#4C4B5E" />
            </div>
          </div>
          <div className="book-page__info">
            <div className="book-page__info-text">
              <p>author: </p>
              <p>publisher: </p>
              <p>pages: </p>
              <p>year: </p>
            </div>
            <div className="">
              <p>{book.authors}</p>
              <p>{book.publisher}</p>
              <p>{book.pages}</p>
              <p>{book.year}</p>
            </div>
          </div>
          <span className="book-page__info-link">More detalse </span>
          <BookBuy book={book} />
          <div className="preview">Preview book</div>
        </div>
      </div>

      <div className="tabs">
        <input type="radio" name="tab-btn" id="tab-btn-1" value="" defaultChecked />
        <label htmlFor="tab-btn-1">Description</label>
        <input type="radio" name="tab-btn" id="tab-btn-2" value="" />
        <label htmlFor="tab-btn-2">Authors</label>
        <input type="radio" name="tab-btn" id="tab-btn-3" value="" />
        <label htmlFor="tab-btn-3">Reviews</label>
        <div id="content-1">
          {book.desc}
        </div>
        <div id="content-2">
          {book.authors}
        </div>
        <div id="content-3">
          {book.reviews}
        </div>
      </div>
      <div className="form">
        <div className="form__title title">Subscribe to Newsletter</div>
        <div className="form__text">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</div>
        <div className="form__search">
          <input placeholder="Your email" type="text" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};
