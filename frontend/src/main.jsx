import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';

// Mount the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

window.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.preloader');
  if (loader) {
    setTimeout(() => {
      loader.remove();
    }, 4000);
  }
});
