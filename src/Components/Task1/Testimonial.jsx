import React from 'react';
import './Task1.css'

const Testimonial = ({ detail }) => {
  console.log(detail);
  return (
    <div id="testimonialContainer">
      <div><img src={detail.src} alt={detail.name} /></div>
      <div><h4>"{detail.review}"</h4></div>
      <h3>{detail.name}, {detail.location}</h3>
    </div>
  )
}

export default Testimonial