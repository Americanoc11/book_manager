import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
import AppRouter from './AppRouter';
function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            {/* <AppRouter /> */}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shop' element={<Shop />} />
            <Route path={`/shop/detail/:id`} element={<SingleProduct />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart/show-cart' element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </>

  );

}

export default App;
