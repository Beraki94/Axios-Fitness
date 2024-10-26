import React from 'react'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroCarousel.css'; // For custom styling

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel__container">
      <Slider {...settings}>
        <div className="carousel__slide">
          <img src="https://img.freepik.com/free-photo/side-view-woman-with-headphones-running_23-2148419832.jpg?size=626&ext=jpg&ga=GA1.1.1631200661.1710473064&semt=ais_user" alt="Woman running with headphones" />
          <div className="carousel__caption">
            <h1><span>Transform</span> Your Body</h1>
            <p>Join Axios Fitness today and embark on a journey to a healthier, stronger you. Our personalized training programs are designed to help you achieve your fitness goals and maintain a balanced lifestyle.</p>
          </div>
          <button className='carousel__btn btn__lg'>JOIN OUR COMMUNITY</button>
        </div>
        <div className="carousel__slide">
          <img src="https://img.freepik.com/premium-photo/young-athletic-african-american-man-trains-dark-gym-athletic-guy-lifts-heavy-dumbbells_164411-4585.jpg?w=900" alt="Man lifting dumbbells in gym" />
          <div className="carousel__caption">
            <h1><span>Expert</span> Guidance</h1>
            <p> Our certified trainers are here to support you every step of the way. At Axios Fitness, we provide professional guidance to ensure you stay motivated and on track.</p>
          </div>
          <button className='carousel__btn btn__lg'>JOIN OUR COMMUNITY</button>
        </div>
        <div className="carousel__slide">
          <img src="https://img.freepik.com/free-photo/athletic-man-practicing-gymnastics-keep-fit_23-2150989809.jpg?t=st=1717857023~exp=1717860623~hmac=be90c8cc7f5083f6e96291323a4ce520acf20186c60160545b7329ab34144b72&w=740" alt="Man practicing gymnastics" />
          <div className="carousel__caption">
            <h1><span>Community</span> Support</h1>
            <p>Become part of the Axios Fitness family and enjoy a supportive, encouraging community. Connect with fellow fitness enthusiasts, participate in group classes, and find the motivation you need to succeed.</p>
          </div>
          <button className='carousel__btn btn__lg'>JOIN OUR COMMUNITY</button>
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
