import React from 'react';
import './items-in-like.css';

export const ItemsInLike = ({
    quantity = 0
}) => {
    return quantity > 0 ? (
        <div className="items-in-like">

        </div>
    ) : null
}