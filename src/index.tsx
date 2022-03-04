import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as Yup from 'yup';
import yup_locale_ru from './utils/yup_locale_ru';
import App from './components/App';
import reportWebVitals from './utils/reportWebVitals';

Yup.setLocale(yup_locale_ru);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
