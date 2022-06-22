import React from 'react';
import ReactDOM from 'react-dom/client';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './index.sass';

import { Routes } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <Routes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
