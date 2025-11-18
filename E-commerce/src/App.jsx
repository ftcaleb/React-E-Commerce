import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

// Pages / Components
import Search from './Components/Search'
import Sidebar from './Components/Sidebar'
import Sidebar2 from './Components/Sidebar2'
import ProductCard from './Components/ProductCard'
import AddAddress from './Components/AddAddress'
import Bag from './Components/Bag'      // <-- NEW
import ItemView from './Components/ItemView'  // <-- NEW
import Home from './Pages/Home'         // <-- RECOMMENDED

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* ADD ADDRESS PAGE */}
        <Route path="/add-address" element={<AddAddress />} />

        {/* BAG PAGE */}
        <Route path="/bag" element={<Bag />} />

        {/* PRODUCT ITEM PAGE */}
        <Route path="/item/:id" element={<ItemView />} />

      </Routes>
    </Router>
  );
}

export default App;
