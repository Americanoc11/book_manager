import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/styles.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import stylesheet
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import JavaScript bundle (bao gồm cả Popper.js)
import Home from './components/Home';
import Shop from './components/Shop';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import SingleProduct from './components/SingleProduct';
import ProductList from './components/product/ProductList';
import UserList from './components/user/UserList';
import Login from './components/login/Login';
import Register from './components/Register';
import { ShopContextProvider } from "./context/shop-context"
import { Cart } from './components/cart/Cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
