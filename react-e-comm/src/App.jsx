import './App.css'
import Sidebar from './components/Sidebar'
import Sidebar2 from './components/Sidebar2.jsx'
import MainProduct from './components/MainProduct.jsx'

function App() {
 

  return (
   
      <div className='flex bg-gray-200'>
      <Sidebar/>
      <div className='flex-1 justify-center mb-2.5 p-4'>
      
        
        <div className=''>
        <MainProduct/>
        </div>

      </div>

      <div className="border-l-4 sidebar2 gap-4 p-4 top-[51px] sm:invisible  md:visible lg:visible">
        <div>
          <Sidebar2/>
        </div>

      </div>
      
    
    </div>
  )
}

export default App
