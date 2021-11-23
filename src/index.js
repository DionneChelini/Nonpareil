import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductState from './context/products/ProductState';
import AlertState from './context/alert/AlertState';

ReactDOM.render(
  <React.StrictMode>
    <AlertState>
      <ProductState>
        <App />
      </ProductState>
    </AlertState>
  </React.StrictMode>,
  document.getElementById('root')
);
