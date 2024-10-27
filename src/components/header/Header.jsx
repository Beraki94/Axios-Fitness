import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import Logo from "../../images/axios_fitness_logo.png";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import "./Header.css";
import PopUpModal from "../modal/PopUpModal";

export const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => setIsNavVisible((prev) => !prev);
  const closeNav = () => setIsNavVisible(false);

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__logo" onClick={closeNav}>
          <img src={Logo} alt="Axios Fitness Logo" />
        </Link>
        <ul className={`header__links ${isNavVisible ? "header__links--visible" : "header__links--hidden"}`}>
          {links.map(({ name, path }, index) => (
            <li key={index} onClick={toggleNav} className="header__item">
              <NavLink to={path} className="header__link">
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="header__menu">
          <PopUpModal className="modal__btn"/>
          <div className="header__menu-btn" onClick={toggleNav}>
            {isNavVisible ? <MdClose /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
    
  );
};
