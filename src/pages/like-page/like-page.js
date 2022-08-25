import React from 'react';
import { useSelector } from 'react-redux';
import { LikeItem } from '../../components/like-item';
import { CgArrowLongLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import './like-page.css';

export const LikePage = () => {
    const items = useSelector((state) => state.like.itemsInLike);

    if (items.length < 1) {
        return (
            <div className='heigh'>
                <h1>No favorites</h1>
                <Link to="/" >
                    <CgArrowLongLeft
                        size={55}
                        className="arrow-back bottom"
                    />
                </Link>
            </div>
        )

    }

    return (
        <div className="like-page">
            <div className="line"></div>
            <Link to="/" >
                <CgArrowLongLeft
                    size={55}
                    className="arrow-back"
                />
            </Link>
            <div className="like-page__top">
                <div className="like-page__title title">favorites</div>
                {items.map(book => <LikeItem book={book} />)}
            </div>
            <div className="like-page__total">
                <div className="like-page__total-price">

                </div>
            </div>
        </div>
    )
}