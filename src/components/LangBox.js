import React from 'react'

const LangBox = ({ lang, changeLang }) =>
  <div className="lang-box">
    <div className="lang">
      <p className="lang-text"
        onClick={() => changeLang('en')}>
        EN
      </p>
      <div className={`bar ${lang === 'en' ? 'active' : ''}`}></div>
    </div>
    <p className="lang-text">|</p>
    <div className="lang">
      <p className="lang-text"
        onClick={() => changeLang('es')}>
        SPA
      </p>
      <div className={`bar ${lang === 'es' ? 'active' : ''}`}></div>
    </div>
  </div>


export default LangBox
