import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { FaCheck } from "react-icons/fa6";
import LogoName from "../../images/axios_fitness_logo.png";
import "./AboutSplitSection.css";

const AboutSplitSection = () => {
  return (
    <section className="about__split-section">
      <SectionHeader 
        title="EMPOWERING YOU TO BE YOUR BEST" 
        subTitle="Our Company Overview" 
      />
      
      {/* Company Description */}
      <div className="about__split-content">
        <div className="about__description">
          <p className="about__text">
            Welcome to Axios Fitness - where fitness meets motivation. Our mission is to help you achieve your goals through tailored workouts, nutritional guidance, and a supportive community. Founded by fitness enthusiasts, our journey began with a simple idea: to make quality fitness accessible to everyone, from beginners to seasoned athletes.
          </p>
        </div>
        
        {/* Company Logo */}
        <div className="about__logo-section">
          <img src={LogoName} alt="Axios Fitness Logo" className="about__logo" />
          <h1 className="about__logo-title">Axios Fitness</h1>
        </div>
      </div>
      
      {/* Mission and Values */}
      <div className="about__mission-values">
        {/* Mission Statement */}
        <div className="about__mission">
          <h4>Our Mission</h4>
          <p>
            At Axios Fitness, we empower individuals to lead healthier, happier lives by offering high-quality fitness training and nutritional guidance. Our goal is to create a supportive community where everyone can thrive, regardless of where they are on their fitness journey.
          </p>
        </div>
        
        {/* Core Values */}
        <div className="about__values">
          <h4>Our Values</h4>
          <ul>
            <li><FaCheck /> Inclusivity: We welcome everyone, regardless of fitness level or background.</li>
            <li><FaCheck /> Accountability: We hold ourselves to high standards of service.</li>
            <li><FaCheck /> Wellness: We prioritize physical, mental, and emotional well-being.</li>
            <li><FaCheck /> Passion for Fitness: We’re dedicated to helping you reach your fitness goals.</li>
            <li><FaCheck /> Community Support: We foster a community that motivates each other.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSplitSection;
