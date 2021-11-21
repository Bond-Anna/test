import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import css from './navbar.module.css';

export function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={css.navbar}>
        <NavLink to="#" className={css.menuBars}>
          <FaBars onClick={showSidebar} />
        </NavLink>
      </div>
      <nav className={`${css.navMenu} ${sidebar ? css.active : css.navMenu}`}>
        <div className={css.navMenuItems} onClick={showSidebar}>
          <div className={css.navbarToggle}>
            <NavLink to="#" className={css.menuBars}>
              <AiOutlineClose />
            </NavLink>
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${css.navText} ${isActive ? css.activeLink : css.navText}`
            }
          >
            <AiFillHome className={css.icon} />
            Home
          </NavLink>
          <NavLink
            to="/table"
            className={({ isActive }) =>
              `${css.navText} ${isActive ? css.activeLink : css.navText}`
            }
          >
            <IoIosPaper className={css.icon} />
            Table
          </NavLink>
        </div>
      </nav>
    </>
  );
}
