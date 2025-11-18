import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

// Pages / Components
import Search from './Components/Search'
import Sidebar from './Components/Sidebar'
import Sidebar2 from './Components/Sidebar2'
import ProductCard from './Components/ProductCard'
import AddAddress from './Components/AddAddress'
import Bag from './Components/Bag'      
import ItemView from './Components/ItemView'  
import Home from './Pages/Home'         
import AddPayment from './Components/AddPayment';
import Checkout from './Components/Checkout';
import OrderSuccess from './Pages/OrderSuccess';


function App() {
  return (
    <Router>
      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        <Route path="/order-success" element={<OrderSuccess />} />

        {/* ADD ADDRESS PAGE */}
        <Route path="/add-address" element={<AddAddress />} />
        
        {/* Add Payment Page */}
        <Route path="/add-payment" element={<AddPayment />} />

        <Route path="/checkout" element={<Checkout />} />

        {/* BAG PAGE */}
        <Route path="/bag" element={<Bag />} />

        {/* PRODUCT ITEM PAGE */}
        <Route path="/item/:id" element={<ItemView />} />

      </Routes>
    </Router>
  );
}

export default App;
