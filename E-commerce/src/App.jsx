import React from 'react'
import Search  from './Components/Search'
import Sidebar from './Components/Sidebar'
import Sidebar2 from './Components/Sidebar2'
import ProductCard from './Components/ProductCard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
     <div className='flex bg-gray-200'>
      <Sidebar/>
      <div className='flex-1 justify-center mb-2.5 p-4'>
        <div className='flex justify-center '>
          <Search/>
        </div>
        
        <div className=''>
        <ProductCard/>
        </div>

      </div>

      <div className="border-l-4 sidebar2 gap-4 p-4 top-[51px] sm:invisible  md:visible lg:visible">
        <div>
          <Sidebar2/>
        </div>

      </div>
      
    
    </div>
  );
}

export default App;
