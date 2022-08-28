import { useState } from 'react';
import {Link} from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import './book-filter.css'


export const BlogFilter = ({ bookQuery, latest, setSearchParams }) => {
    const [search, setSearch] = useState(bookQuery);
    const [checked, setChecked] = useState(latest);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const query = form.search.value;
        const isLatest = form.latest.checked;

        const params = {};

        if (query.length) params.book = query;
        if (isLatest) params.latest = true;

        setSearchParams(params);
    }

    return (
        <form className="header__input" autoComplete="off" onSubmit={handleSubmit}>
            <input className='btn-search' placeholder='Search' type="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
            <label >
                <input type="checkbox" className='btn-checked' name="latest" checked={checked} onChange={e => setChecked(e.target.checked)}/>
            </label>

            <input className='btn-input-search' type="submit" value=""/>
            
            <Link to="/search"><AiOutlineSearch className="header__input-search" size={20} /></Link>
        </form>
    );
};
