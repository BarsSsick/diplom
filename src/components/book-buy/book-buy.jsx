import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button";
import { setItemInCart, deleteItemFromCart } from "../../store/cart/reducer";
import "./book-buy.css";

export const BookBuy = ({ book }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.isbn13 === book.isbn13);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(book.isbn13));
    } else {
      dispatch(setItemInCart(book));
    }
  };

  return (
    <div className="book-buy">
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? "Remove from cart" : "add to cart"}
      </Button>
    </div>
  );
};
