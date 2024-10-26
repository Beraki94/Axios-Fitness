import { servicesData } from "../../data";
import "./GymServices.css";
import { SiBytedance } from "react-icons/si";
import { GiBoxingGlove } from "react-icons/gi";
import { IoBody } from "react-icons/io5";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoMdFitness } from "react-icons/io";

const iconMap = {
  GiBoxingGlove: <GiBoxingGlove />,
  SiBytedance: <SiBytedance />,
  FaPersonSwimming: <FaPersonSwimming />,
  IoBody: <IoBody />,
  IoMdFitness: <IoMdFitness />,
};

const Services = ({ name, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{iconMap[icon]}</div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

const GymServices = () => {
  return (
    <section className="gym-services">
      {servicesData.map((service) => (
        <Services
          key={service.id}
          name={service.name}
          icon={service.icon}
          description={service.description}
        />
      ))}
    </section>
  );
};

export default GymServices;
