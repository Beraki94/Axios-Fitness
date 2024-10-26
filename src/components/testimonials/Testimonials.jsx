import "./Testimonials.css";
import React, { useState } from 'react';
import { testimonials } from "../../data";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="testimonials__card">
        <img 
          className="testimonials__image" 
          src={testimonials[current].image} 
          alt={testimonials[current].name} 
        />
        <p className="testimonials__text">"{testimonials[current].text}"</p>
        <h4 className="testimonials__name">{testimonials[current].name}</h4>
      </div>
      <div className="testimonials__buttons">
        <button onClick={prevTestimonial} className="testimonials__button">Previous</button>
        <button onClick={nextTestimonial} className="testimonials__button">Next</button>
      </div>
    </section>
  );
}

export default Testimonials;
