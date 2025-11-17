import React from 'react'
import Home from './Pages/Home'
import Search  from './Components/Search'
import Sidebar from './Components/Sidebar'
import Bag from "./Components/Bag";

function App() {
  return (
    <div className='flex bg-gray-200'>
      <Sidebar/>
      <div className='flex-1 justify-center p-4'>
        <Search/>
        <div className=''>
        <Home/>
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
