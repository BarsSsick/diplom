import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BookCover } from "../book-cover/book-cover";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { setCurrentbook } from "../../store/books/reducer";
import "./book-item.css";

export const BookItem = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentbook(book));
    navigate(`/${book.title}`);
  };

  return (
    <div className="book-item" onClick={handleClick}>
      <div className="book-item__img">
        <BookCover image={book.image} />
      </div>
      <div className="book-item__details">
        <span className="book-item__title title">{book.title}</span>
        <span className="book-item__subtitle">{book.subtitle}</span>
        <div className="book-item__botom">
          <span className="book-buy__price title">${book.price.split('').slice(1).join('')}</span>
          <div className="rating">
            <AiFillStar width={14}  color="#4C4B5E"/>
            <AiFillStar width={14} color="#4C4B5E"/>
            <AiFillStar width={14} color="#4C4B5E"/>
            <AiFillStar width={14} color="#4C4B5E"/>
            <AiOutlineStar width={14} color="#4C4B5E"/>
          </div>
        </div>
      </div>
    </div>
  );
};
