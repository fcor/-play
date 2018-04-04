import React from 'react'

const LangBox = ({ lang, changeLang, version }) =>
  <div className={`lang-box ${version === 'mobile' ? 'mobile' : ''}`}>
    <div className="lang">
      <p className={`lang-text ${version === 'mobile' ? 'mobile' : ''}`}
        onClick={() => changeLang('en')}>
        EN
      </p>
      <div className={`bar ${lang === 'en' ? 'active' : ''}`}></div>
    </div>
    <p className={`lang-text ${version === 'mobile' ? 'mobile' : ''}`}>|</p>
    <div className="lang">
      <p className={`lang-text ${version === 'mobile' ? 'mobile' : ''}`}
        onClick={() => changeLang('es')}>
        SPA
      </p>
      <div className={`bar ${lang === 'es' ? 'active' : ''}`}></div>
    </div>
  </div>


export default LangBox
