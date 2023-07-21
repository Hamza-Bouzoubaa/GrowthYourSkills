// HowItWorks.jsx
import React from 'react';
import './HowItWorks.css';
import Chat from './Chat';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="how-it-works-container mt-5">
      <h1 className="title mt-0">{t('howItWorks.title')}</h1>
      <ol className="steps-list">
        <li>
          <h2>{t('howItWorks.step1Title')}</h2>
          <p>{t('howItWorks.step1Description')}</p>
        </li>
        <li>
          <h2>{t('howItWorks.step2Title')}</h2>
          <p>{t('howItWorks.step2Description')}</p>
        </li>
        <li>
          <h2>{t('howItWorks.step3Title')}</h2>
          <p>{t('howItWorks.step3Description')}</p>
        </li>
        <li>
          <h2>{t('howItWorks.step4Title')}</h2>
          <p>{t('howItWorks.step4Description')}</p>
        </li>
        <li>
          <h2>{t('howItWorks.step5Title')}</h2>
          <p>{t('howItWorks.step5Description')}</p>
        </li>
        <li>
          <h2>{t('howItWorks.step6Title')}</h2>
          <p>{t('howItWorks.step6Description')}</p>
        </li>
        <li>
          <h2>{t('howItWorks.step7Title')}</h2>
          <p>{t('howItWorks.step7Description')}</p>
        </li>
        <li>
          <h2>{t('howItWorks.step8Title')}</h2>
          <p>{t('howItWorks.step8Description')}</p>
        </li>
        <li>
          <h2>{t('howItWorks.step9Title')}</h2>
          <p>{t('howItWorks.step9Description')}</p>
        </li>
        <li>
          <h2>{t('howItWorks.step10Title')}</h2>
          <p>{t('howItWorks.step10Description')}</p>
        </li>
        <li>
          <h2>{t('howItWorks.step11Title')}</h2>
          <p>{t('howItWorks.step11Description')}</p>
        </li>
      </ol>
      <Chat />
    </div>
  );
};

export default HowItWorks;
