import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MainPage.css';
import Chat from '../Composant/Chat';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Main_Page() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="section-container mb-5">
        <h1 className="section-title pt-5">{t('mainPage.whoWillYouBecome')}</h1>
        <p className="section-text3">
          {t('mainPage.duringToughTimes')}
        </p>
        <div className="d-flex justify-content-center pb-3">
        </div>
      </div>

      <div className="section2 text-center">
        <h1 className="section-text2">{t('mainPage.howDoesItWork')}</h1>
        <div className="center-image">
          <div className="row">
            <div className="col-md-4">
              <div className="step">
                <div className="step-content">
                  <span className="step-number step-number-big">1</span>
                  <h2 className="step-title">{t('howItWorks.step1Title')}</h2>
                  <p className="step-description">{t('howItWorks.step1Description')}</p>
                </div>
              </div>
            </div>
           
            <div className="col-md-4">
              <div className="step">
                <div className="step-content">
                  <span className="step-number step-number-big">2</span>
                  <h2 className="step-title">{t('howItWorks.step2Title')}</h2>
                  <p className="step-description">{t('howItWorks.step2Description')}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step">
                <div className="step-content">
                  <span className="step-number step-number-big">3</span>
                  <h2 className="step-title">{t('howItWorks.step3Title')}</h2>
                  <p className="step-description">{t('howItWorks.step3Description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="center-image mt-5">
        <Link to="/GrowthYourSkills/Cours">
          <button className="btn btn-primary">{t('mainPage.startNow')}</button>
        </Link>
      </div>

      <Chat />
    </div>
  );
}

export default Main_Page;
