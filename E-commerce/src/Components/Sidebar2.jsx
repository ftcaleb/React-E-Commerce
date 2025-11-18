import React from 'react'
import White11 from '../assets/White11.png'
import Black11 from '../assets/Black11.png'
import Laptop from '../assets/SLaptop.png'
import Blue11 from '../assets/Blue11.png'
import { IoBagHandleOutline } from "react-icons/io5";
import ViewBag from '../assets/ViewBag.svg'
import { Link } from 'react-router-dom';

export default function Sidebar2() {

  // Opened an array of objects
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
    // Opened a div for everything so that it contains the content
    <div>

      {/* Opened a div to center the h1 */}
        <div className='flex justify-center'>
            <h1 className='text-bold text-3xl'>
                Bag
            </h1>
      </div>
      
      {/* Opened a div and used grid to place these in a column of 3 and set the width */}
      <div className='grid grid-cols-3  w-[300px] bg-gray-200 '>

        {/* I mapped over the array objects using their index with this arrow function */}
      {Sidebars.map((Sidebar, index) => (
        // Then opened the div for the key index and styled it accordingly
        <div
          key={index}
          className="w-[300px] h-[90px] grid grid-cols-3 mb-4"
        >
        {/* Opened a div for the images with a css class from index.css for styling */}
        <div>
          
        <img src={Sidebar.Image} alt={Sidebar.name} className="sideimage" />
        
        </div>
            
            
        </div> 
          
         

          
        
      ))} 
    </div>
    {/* Placed this div outside the arrow function to style it independently */}
    <div className='flex justify-center'>
      <Link to='/bag' >
        <img src={ViewBag} alt="" className="Viewbag" />
        </Link>
    </div>
    </div>
  )
}

