import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../components/App/App';
import ItemDetails from '../components/ItemDetails/ItemDetails';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/item/:alias" element={<ItemDetails />} />
    </Routes>
  </Router>
);

export default AppRouter;


