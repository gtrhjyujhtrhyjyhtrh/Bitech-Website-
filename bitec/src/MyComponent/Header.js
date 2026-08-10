import React, { useState, useEffect } from 'react';
import axios from "axios";
import Bitech from './Bitech.png';



function Header({ currentPath, navigate }) {
  const [hovered, setHovered] = useState(null);
  const [links, setLinks] = useState([]);

  const handleNavigation = (event, to) => {
    event.preventDefault();
    navigate(to);
  };

  useEffect(() => {
  fetchNavbar();
}, []);

const fetchNavbar = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/navbar"
    );

    setLinks(
      response.data
        .filter(item => item.visible)
        .sort((a, b) => a.position - b.position)
        .map(item => ({
          label: item.title,
          to: item.route,
        }))
    );
  } catch (error) {
    console.error(error);
  }
};

  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
          onClick={(event) => handleNavigation(event, '/')}
        >
          <img src={Bitech} alt="BiTech" width="120" height="40" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="fw-bold mx-auto p-2 gap-3">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-3 nav-underline">
              {links.map(({ label, to }) => (
                <li className="nav-item" key={to}>
                  <a
                    className="nav-link"
                    href={to}
                    aria-current={currentPath === to ? 'page' : undefined}
                    onClick={(event) => handleNavigation(event, to)}
                    onMouseEnter={() => setHovered(to)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
  color:
    currentPath === to || hovered === to
      ? '#4CAF50'
      : '#362e2e79',
  transition: 'color 0.3s ease',
}}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-3">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => navigate('/contact-us')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;