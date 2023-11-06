import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
  )


registerServiceWorker();
