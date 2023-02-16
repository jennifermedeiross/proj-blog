import { NavLink } from 'react-router-dom';

import About from '../../pages/About';
import Home from '../../pages/Home';

import './NavBar.module.css';

const NavBar = () => {
  return (
    <header>
      <NavLink to="/">Proj <span>Blog</span></NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;