import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiCrossedSabres } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import style from './Navbar.module.css';

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const closemenu = () => {
    setShow(false);
  };
  const showmenu = () => {
    setShow(true);
  };

  return (
    <nav className={style.navbarContainer}>
      <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="logo" />
      <div className={show ? `${style.navbarlink} ${style.navbarlinkmobile}` : `${style.navbarlink}`}>
        <GiCrossedSabres onClick={closemenu} className={style.closeIcon} />
        <div className={style.navbarlinklist}>
          <NavLink
            onClick={closemenu}
            exact
            to="/"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
          >
            Home
          </NavLink>
          <NavLink
            onClick={closemenu}
            exact
            to="/skills"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
          >
            Skills
          </NavLink>
          <NavLink
            onClick={closemenu}
            exact
            to="/projects"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
          >
            Projects
          </NavLink>
          <NavLink
            onClick={closemenu}
            exact
            to="/contact"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
          >
            Contact
          </NavLink>
        </div>

      </div>
      <div className={style.hamburger}>
        <RxHamburgerMenu onClick={showmenu} className={style.hamburgerIcon} />
      </div>

    </nav>
  );
};

export default Navbar;
