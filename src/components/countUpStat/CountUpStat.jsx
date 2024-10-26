import React from 'react';
import CountUp from 'react-countup';
import { FaDumbbell, FaUserFriends, FaSmile, FaMedal } from 'react-icons/fa';
import './CountUpStat.css';

const CountUpStat = () => {
  const stats = [
    {
      icon: <FaDumbbell size={30} />,
      end: 182,
      label: 'Modern Equipments',
    },
    {
      icon: <FaUserFriends size={30} />,
      end: 88,
      label: 'Experienced Trainers',
    },
    {
      icon: <FaSmile size={30} />,
      end: 29,
      suffix: 'K',
      label: 'Happy Customers',
    },
    {
      icon: <FaMedal size={30} />,
      end: 12,
      label: 'Years of Experience',
    },
  ];

  return (
    <section className="statistics">
      {stats.map((stat, index) => (
        <div key={index} className="statistics-details">
          <div className="stat-icon">{stat.icon}</div>
          <span className="countup-value">
            <CountUp end={stat.end} duration={5} />
            {stat.suffix && stat.suffix}
            <span> +</span>
          </span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </section>
  );
};

export default CountUpStat;
