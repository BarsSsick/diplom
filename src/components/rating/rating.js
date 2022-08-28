import ReactStars from "react-rating-stars-component";
import React from "react";



export const ratingChanged = (newRating) => {
    return (
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
        />
    );
};
