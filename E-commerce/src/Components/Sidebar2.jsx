import React from 'react'
import White11 from '../assets/White11.png'
import Black11 from '../assets/Black11.png'
import Laptop from '../assets/SLaptop.png'
import Blue11 from '../assets/Blue11.png'
import { IoBagHandleOutline } from "react-icons/io5";
import ViewBag from '../assets/ViewBag.svg'
import { Link } from 'react-router-dom';

export default function Sidebar2() {

    const Sidebars = [
        {
            Image: Laptop,
            
            },
            {
            Image: Blue11,
            
            },
            {
            Image: White11,
            
            },
            {
            Image: Black11,
            },
             
    ]


  return (
    <div>
        <div className='flex justify-center'>
            <h1 className='text-bold text-3xl'>
                Bag
            </h1>
      </div>
      
      <div className='grid grid-cols-3  w-[300px] bg-gray-200 '>
      {Sidebars.map((Sidebar, index) => (
        <div
          key={index}
          className="w-[300px] h-[90px] grid grid-cols-3 mb-4"
        >
        <div>
          
        <img src={Sidebar.Image} alt={Sidebar.name} className="sideimage" />
        
        </div>
            
            
        </div> 
          
         

          
        
      ))} 
    </div>
    <div className='flex justify-center'>
      <Link to='/bag' >
        <img src={ViewBag} alt="" className="Viewbag" />
        </Link>
    </div>
    </div>
  )
}

