import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <section className={css.section}>
      <ul className={css.ul}>
        <li className={css.li}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={css.li}>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Navigation;
