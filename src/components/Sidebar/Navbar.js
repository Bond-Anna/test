import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import css from './navbar.module.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={css.navbar}>
        <NavLink to="#" className={css.menuBars}>
          <FaIcons.FaBars onClick={showSidebar} />
        </NavLink>
      </div>
      <nav className={`${css.navMenu} ${sidebar ? css.active : css.navMenu}`}>
        <div className={css.navMenuItems} onClick={showSidebar}>
          <div className={css.navbarToggle}>
            <NavLink to="#" className={css.menuBars}>
              <AiIcons.AiOutlineClose />
            </NavLink>
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${css.navText} ${isActive ? css.activeLink : css.navText}`
            }
          >
            <AiIcons.AiFillHome className={css.icon} />
            Home
          </NavLink>
          <NavLink
            to="/table"
            className={({ isActive }) =>
              `${css.navText} ${isActive ? css.activeLink : css.navText}`
            }
          >
            <IoIcons.IoIosPaper className={css.icon} />
            Table
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
