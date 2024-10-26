import React from "react";
import CountUpStat from "../../components/countUpStat/CountUpStat";
import PricingList from "../../components/pricingCard/PricingList";
import HeroCarousel from "../../components/slider/HeroCarousel";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import Testimonials from "../../components/testimonials/Testimonials";
import GymServices from "../../components/gymServices/GymServices";
import BadgeSlider from "../../components/slider/BadgeSlider";
import "./Home.css";

const Home = () => {
  return (
    <div className="home container">
      {/* Hero Section */}
      <div className="home__hero">
        <HeroCarousel />
      </div>

      {/* Stat Section */}
      <section className="home__stat">
        <CountUpStat />
      </section>

      {/* Services Section */}
      <section className="home__services">
        <SectionHeader 
          title="WHAT WE DO" 
          subTitle="Our range of fitness services" 
        />
        <GymServices />
      </section>

      {/* Badge Slider Section */}
      <section className="home__badge">
        <BadgeSlider />
      </section>

      {/* Pricing Plans Section */}
      <section className="home__plans">
        <SectionHeader 
          title="BECOME A MEMBER" 
          subTitle="Our Affordable Pricing Plan" 
        />
        <PricingList />
      </section>

      {/* Testimonials Section */}
      <section className="home__testimony">
        <SectionHeader 
          title="HEAR FROM OUR MEMBERS" 
          subTitle="Testimonials from our valued clients" 
        />
        <Testimonials />
      </section>

      {/* Discount Banner */}
      <section className="home__discount">
        <div>
          <h4>ENJOY 50% DISCOUNT</h4>
          <h5>Offer Lasts until 31st December 2024</h5>
        </div>
        <button className="btn__lg">BECOME A MEMBER NOW</button>
      </section>
    </div>
  );
};

export default Home;
