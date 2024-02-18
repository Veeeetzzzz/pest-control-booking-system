import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App'; // This is correct if App.js is alongside index.js in the src directory.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
