import { NavLink } from 'react-router-dom';

import About from '../../pages/About';
import Home from '../../pages/Home';

import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <header className={styles.navBar}>
      <NavLink to="/" className={styles.brand}>
        Proj <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : '')}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : '')}>Register</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')}>About</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;