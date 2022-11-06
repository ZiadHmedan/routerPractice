import "../Component/Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="ulNav">
        <li>
          <Link to="/" className="liNav">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="liNav">
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
