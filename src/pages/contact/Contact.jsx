import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';
import PageHeader from '../../components/pageHeader/PageHeader';
import SectionHeader from '../../components/sectionHeader/SectionHeader';

const Contact = () => {
  return (
    <div className="contact container">
      <PageHeader title={"Contact Us"}image={"https://t3.ftcdn.net/jpg/06/52/75/52/240_F_652755297_NWouGidex5E6PMghw45aelNYZxG0jgPP.jpg"}>
      "The only bad workout is the one that didn’t happen."
      </PageHeader>
      <section className="contact__container">
        <div><SectionHeader title={"BECOME A MEMBER"} subTitle={"Our Affordable Pricing Plan"} /></div>
        {/* Contact Info */}
        <div className='generel__info'>
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
        </div>
       
      </section>
      
    </div>
  );
};

export default Contact;


