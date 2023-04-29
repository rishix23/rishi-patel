import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Rishi</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {/* <li className="navbar-item">
            <Link to="/about" className="nav-link">About</Link>
              </li> */}
          <li className="navbar-item">
            <Link to="/blogs" className="nav-link">Blog</Link>
          </li> 
          <li className="navbar-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="/photos" className="nav-link">Photos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
