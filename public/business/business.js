// bundle.js

// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import ItemDetails from '../../src/components/ItemDetails/ItemDetails';

// Mount your React component in the HTML container
const container = document.getElementById('item-details-container');
ReactDOM.render(<ItemDetails />, container);
