import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">Weather Station</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Todayyyyyy</Link>
          </li>
          <li>
            <Link to="/week">Week</Link>
          </li>
          <li>
            <Link to="/10days">10 Days</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
