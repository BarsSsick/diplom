import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
import { BookItem } from '../../components/book-item';
import './home-page.css';

export let BOOKS = [];

export const HomePage = () => {
    const [books, setBook] = useState([]);

    const [searchParams] = useSearchParams();

    const bookQuery = searchParams.get('book') || '';
    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;


    useEffect(() => {
        fetch('https://api.itbook.store/1.0/search/mongodb')
            .then(res => res.json())
            .then((data) => setBook(data.books));
        
    })
    return (
        <div className="home-page">
            <div className="line"></div>
            <div>
                <div className="home-page__title title">New Releases Books</div>
                <div className="book-page__items">
                    {
                        books.filter(
                            book => book.title.includes(bookQuery) && book.isbn13 >= startsFrom
                        ).map(book => (
                            <BookItem book={book} key={book.isbn13} />
                        ))
                    }
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
    )
}

