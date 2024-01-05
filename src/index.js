import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_PROD,
  authDomain: process.env.REACT_APP_AUTHDOMAIN_PROD,
  projectId: process.env.REACT_APP_PROJECTID_PROD,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET_PROD,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID_PROD,
  appId: process.env.REACT_APP_APPID_PROD,
  measurementId: process.env.REACT_APP_MEASUREMENTID_PROD
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
