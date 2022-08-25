import React from 'react';
import classNames from 'classnames'
import './button.css';

export const Button = ({ onClick, type, children, }) => {
    const btnClass = classNames({
        'btn': true,
        'title': true,
      });

    return (
        <button
            className={ btnClass }
            onClick={ onClick }
        >
            { children }
        </button>
    )
}
