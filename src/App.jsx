import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import Header from './components/Header';
 


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const cartItems = useSelector(state => state.cart.cartItems); // Access cart items from Redux
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0); // Calculate total amount

  return (
    <div>
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        cartItemsCount={cartItems.length} // Pass cart items count to Header
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} totalAmount={totalAmount} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} totalAmount={totalAmount} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
