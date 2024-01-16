import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // This imports your App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This targets the div with id 'root' in your index.html file
);
