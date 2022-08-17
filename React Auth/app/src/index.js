import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import AuthContext from './contexts/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
    <App />
    </AuthContext>
  </React.StrictMode>
);
