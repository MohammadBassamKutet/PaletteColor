import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
window.addEventListener("load",()=>{
  console.log("Hello To the Pallete Color")
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);