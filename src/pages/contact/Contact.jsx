import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';
import PageHeader from '../../components/pageHeader/PageHeader';
const Contact = () => {
  return (
    <div className="contact container">
      <PageHeader title={"Contact Us"}image={"https://t3.ftcdn.net/jpg/06/52/75/52/240_F_652755297_NWouGidex5E6PMghw45aelNYZxG0jgPP.jpg"}>
      "The only bad workout is the one that didn’t happen."
      </PageHeader>
      <section className="contact__container">
        {/* Contact Info */}
        <div className="contact__info">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us through any of the following channels.</p>
          <div className="contact__details">
            <div className="contact__detail">
              <FaMapMarkerAlt className="contact__icon" />
              <span>123 Fitness Street, Wellness City, Healthland</span>
            </div>
            <div className="contact__detail">
              <FaPhoneAlt className="contact__icon" />
              <span>+123 456 7890</span>
            </div>
            <div className="contact__detail">
              <FaEnvelope className="contact__icon" />
              <span>info@fitnessgym.com</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact__form">
          <form>
            <div className="form__group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form__group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form__group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form__group">
              <textarea placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <div className="contact__map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31107.180284406888!2d3.369455499932717!3d6.5582037999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f314c48f0a3%3A0x2e67656fdddb41d7!2s29%20Adeleye%20St%2C%20Gbagada%20102216%2C%20Lagos!5e0!3m2!1sen!2sng!4v1698252510097!5m2!1sen!2sng" 
          width="100%" 
          height="400" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Gym Location"
        />
      </div>
    </div>
  );
};

export default Contact;


