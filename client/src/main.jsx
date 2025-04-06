import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap first
import './index.css';                          // ✅ Your styles after that

import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProvider } from './context/AuthContext.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
