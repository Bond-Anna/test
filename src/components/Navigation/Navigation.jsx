import { NavLink } from 'react-router-dom';
import Sword from './sword.png';
import css from './navigation.module.css';
export const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <nav className={css.sidenav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : css.link}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/table"
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : css.link}`
          }
        >
          Table
        </NavLink>
      </nav>
      <img src={Sword} alt="" height="400" className={css.sword}></img>
    </div>
  );
};
