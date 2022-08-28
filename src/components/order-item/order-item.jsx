import React from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineClose } from "react-icons/md";
import { BookCover } from '../book-cover/book-cover';
import './order-item.css';
import { deleteItemFromCart } from '../../store/cart/reducer';

export const OrderItem = ({ book }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(book.isbn13))
    }
    return (
        <div className="order-item">
            <div className="order-item__wrap">
                <div className="order-item__cover">
                    <BookCover image={book.image} />
                </div>
                <div className="order-item__title">
                    <span> {book.title} </span>
                    <span> {book.subtitle} </span>
                </div>
                <div className="order-item__price">
                    <span>${book.price.split('').slice(1).join('')}</span>
                    <MdOutlineClose
                        size={25}
                        className="cart-item__delete-icon"
                        onClick={handleDeleteClick}
                    />
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}
