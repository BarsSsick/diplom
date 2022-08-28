import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
import { BookItem } from '../../components/book-item';
import './search-page.css';


export const SearchPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://api.itbook.store/1.0/search/mongodb')
            .then(res => res.json())
            .then((data) => setBooks(data.books));
    }, []);

    const [searchParams] = useSearchParams();

    const bookQuery = searchParams.get('book') || '';
    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;


    return (
        <div>
            <h1 className='title'>Search results</h1>

            {
                books.filter(
                    book => book.title.includes(bookQuery) && book.isbn13 >= startsFrom
                ).map(book => (
                    <BookItem book={book} key={book.isbn13} />
                ))
            }
        </div>
    )
}