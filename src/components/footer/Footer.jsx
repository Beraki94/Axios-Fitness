import React from 'react';
import Logo from "../../images/axios_fitness_logo.png";
import { Link } from 'react-router-dom';
import { FaFacebook, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai';
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <img src={Logo} alt="Website Logo"/>
          <h4>Axios Fitness</h4>
          <p>Your Ultimate Fitness Destination</p>
          <div className="social-icons">
            <Link to={"https://web.facebook.com"}><FaFacebook /></Link>
            <Link to={"https://www.instagram.com"}><AiFillInstagram /></Link>
            <Link to={"https://twitter.com"}><AiOutlineTwitter /></Link>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
          </ul>
        </div>
        
        {/* Address Section */}
        <div className="footer-section address">
          <h5>Our Address</h5>
          <div className="contact-detail">
            <FaMapMarkerAlt className="footer-icon" />
            <p>29, Adeleye Street, Sawmill, Gbagada-Lagos</p>
          </div>
          <div className="contact-detail">
            <AiOutlineMail className="footer-icon" />
            <p>Email: info@fitnesshub.com</p>
          </div>
          <div className="contact-detail">
            <FaPhoneAlt className="footer-icon" />
            <p>Phone: +234 8164922655</p>
          </div>
        </div>
        
        {/* Hours Section */}
        <div className="footer-section hours">
          <h5>Our Timings</h5>
          <p>Monday - Friday: 9:00 AM - 8:30 PM</p>
          <p>Saturday - Sunday: 10:30 AM - 7:30 PM</p>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>All rights reserved © Beraki Digital</p>
      </div>
    </footer>
  );
};
