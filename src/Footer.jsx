import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-black text-white mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-1 text-left">
            <Link className="navbar-brand text-white mr-3" to="/">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" height="50" width="142" />
            </Link>
          </div>
          <div className="col-md-8 text-center">
            <Link to="/GrowthYourSkills/Prof" className="nav-link text-white d-block mb-0">
              {t('mentor.button')}
            </Link>
            <Link to="/GrowthYourSkills/HowItWorks" className="nav-link text-white d-block mb-0">
              {t('navbar.howItWorks')}
            </Link>
            <Link to="/GrowthYourSkills/Cours" className="nav-link text-white d-block mb-0">
              {t('navbar.ourCourses')}
            </Link>
          </div>
          <div className="col-md-3 text-right">
            <p>
              {t('footer.address')}<br />
              {t('footer.cityStateZIP')}<br />
              {t('footer.phone')}<br />
              {t('footer.email')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
