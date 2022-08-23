import React from 'react';
import './Task2.css';

const Detail = ({ src, heading, text }) => {
    return (
       <div className="detailCard">
            <img src={src} alt={heading} />
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Detail