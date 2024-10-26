import "./BadgeSlider.css";
import React, { useEffect, useRef } from 'react';
import Badge from './badge';
import { badgesImage } from '../../data';

const BadgeSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let position = 0;

    const scrollSpeed = 2; // Adjust speed as needed
    const scroll = () => {
      if (slider) {
        position = (position + scrollSpeed) % slider.scrollWidth;
        slider.scrollTo(position, 0);
      }
      requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(scroll);
  }, []);

  return (
    <div className="badge-slider" ref={sliderRef}>
      {[...badgesImage, ...badgesImage, ...badgesImage].map((badge, index) => (
        <Badge key={index} src={badge.src} alt={badge.alt} />
      ))}
    </div>
  );
};

export default BadgeSlider;
