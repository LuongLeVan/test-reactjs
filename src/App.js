import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import store from './redux/store';
import ThankYou from './pages/ThankYou/ThankYou';
import Header from './components/Header/Header';


const App = () => {
  return (
    <div>
      <Header/>
      <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
      </Provider>
    </div>
  );
};

export default App;
