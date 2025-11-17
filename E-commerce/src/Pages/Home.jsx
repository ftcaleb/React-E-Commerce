import React from 'react'
import Red11 from '../assets/Red11.png'
import Green11 from '../assets/Green11.png'
import White11 from '../assets/White11.png'
import Black11 from '../assets/Black11.png'
import Watch from '../assets/AppleWatch.png'
import Headsets from '../assets/Headphones.png'
import Button from '../assets/Button.png'
import { FaDollarSign } from "react-icons/fa6";


export default function Home() {
  
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
  )
}

