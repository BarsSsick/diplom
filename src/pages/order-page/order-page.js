import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item';
import { calcTotalPrice } from '../../components/utils';
import { CgArrowLongLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import './order-page.css';

export const OrderPage = () => {
    const items = useSelector((state) => state.cart.itemsInCart);

    if (items.length < 1) {
        return <div className='heigh'>

            <h1>Your cart is empty!</h1>
            <Link to="/" >
                <CgArrowLongLeft
                    size={55}
                    className="arrow-back bottom"
                />
            </Link>
        </div>
    }

    return (
        <div className="order-page">
            <div className="line"></div>
            <Link to="/" >
                <CgArrowLongLeft
                    size={55}
                    className="arrow-back"
                />
            </Link>
            <div className="order-page__top">
                <div className="order-page__title title">Your cart</div>
                {items.map(book => <OrderItem book={book} />)}
            </div>
            <div className="order-page__total">
                <div className="order-page__total-price title">
                    <span>total:</span><span>{calcTotalPrice(items)}</span>
                </div>
                <button className='order-page__total-btn '>check out</button>
            </div>
        </div>
    )
}
