import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import store from './redux/store';
import ThankYou from './pages/ThankYou/ThankYou';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
