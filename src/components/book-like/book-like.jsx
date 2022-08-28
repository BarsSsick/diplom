import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemInLike, deleteItemFromLike } from "../../store/like/reducer";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import './book-like.css';


export const BookLike = ({ book }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.like.itemsInLike);
  const isItemInLike = items.some((item) => item.isbn13 === book.isbn13);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInLike) {
      dispatch(deleteItemFromLike(book.isbn13));
    } else {
      dispatch(setItemInLike(book));
    }
  };

  return (
    <div className="book-like">
      <div className="book-item__like" onClick={handleClick}
        type={isItemInLike ? "secondary" : "primary"}
      >
        {isItemInLike ?
          <FaHeart
            color="#FC857F"
            size={25}
            className="like-icon"
          />
          :
          <FiHeart
            color="white"
            size={25}
            className="like-icon"
          />
        }
      </div>
    </div>
  );
};
