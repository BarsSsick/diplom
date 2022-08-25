import React from 'react';
import { useDispatch } from 'react-redux';
import { FaHeart } from "react-icons/fa";
import { BookCover } from '../book-cover/book-cover';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { deleteItemFromLike } from '../../store/like/reducer';
import './like-item.css';


export const LikeItem = ({ book }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromLike(book.isbn13))
    }
    return (
        <div className="like-item">
            <div className="like-item__wrap">
                <div className="like-item__cover">
                    <BookCover image={book.image} />
                </div>
                <div className="like-item__title">
                    <span className='like-item__title-main'> {book.title} </span>
                    <span> {book.subtitle} </span>
                    <div className="like-item__title-bottom">
                        <span className='like-item__title-price'>${book.price.split('').slice(1).join('')}</span>
                        <div className="rating">
                            <AiFillStar width={14} color="#4C4B5E" />
                            <AiFillStar width={14} color="#4C4B5E" />
                            <AiFillStar width={14} color="#4C4B5E" />
                            <AiFillStar width={14} color="#4C4B5E" />
                            <AiOutlineStar width={14} color="#4C4B5E" />
                        </div>
                    </div>

                </div>

                <div className="like-item__price">
                    <FaHeart
                        size={25}
                        className="like-item__delete-icon"
                        onClick={handleDeleteClick}
                    />
                </div>

            </div>
            <div className="line"></div>
        </div>
    )
}