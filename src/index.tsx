import React from 'react';
import ReactDOM from 'react-dom';
import * as Yup from 'yup';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.scss';
import yup_locale_ru from './utils/yup_locale_ru';
import App from './components/App';
import reportWebVitals from './utils/reportWebVitals';
import { rootReducer } from './store/root';

Yup.setLocale(yup_locale_ru);

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
