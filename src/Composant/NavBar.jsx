import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <Link className="navbar-brand mx-3" to="/">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" height="50" width="142" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Prof" className="nav-link text-white">
              <Trans i18nKey="mentor.button" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/HowItWorks" className="nav-link text-white">
              {t('navbar.howItWorks')}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Cours" className="nav-link text-white">
              {t('navbar.ourCourses')}
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown text-white text-center px-4">
        <NavDropdown title={t('navbar.language')} id="language-dropdown">
          <NavDropdown.Item onClick={() => changeLanguage('en')} className="dropdown-item">
            English
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => changeLanguage('fr')} className="dropdown-item">
            French
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    </nav>
  );
}

export default Navbar;
