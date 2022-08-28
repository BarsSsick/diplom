import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/cart/reducer";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./cart-item.css";

export const CartItem = ({ title, price, isbn13 }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(isbn13));
  };

  return (
    <div className="cart-item">
      <span>{title} </span>
      <div className="cart-item__price">
        <span>${price.split('').slice(1).join('')}</span>
        <AiOutlineCloseCircle
          size={15}
          className="cart-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};
