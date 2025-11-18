import React from 'react'
import Red11 from '../assets/Red11.png'
import Green11 from '../assets/Green11.png'
import White11 from '../assets/White11.png'
import Black11 from '../assets/Black11.png'
import Watch from '../assets/AppleWatch.png'
import Headsets from '../assets/Headphones.png'
import Button from '../assets/Button.png'
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function Product() {
  // opened array for transaction information
    const Products = [
        {
            Image: Watch,
            name: "Apple Watch",
            Desc: "Series 5 SE",
            Price: "$ 529.99",
            Cart: Button
            },
            {
            Image: Headsets,
            name: "Sony ZX330BT",
            Desc: "Light Grey",
            Price: "$ 39.99",
            Cart: Button
            },
            {
            Image: Black11,
            name: "Iphone 11",
            Desc: "Serious Black",
            Price: "$ 619.99",
            Cart: Button
            },
            {
            Image: Green11,
            name: "iphone 11",
            Desc: "Subway Blue",
            Price: "$ 619.99",
            Cart: Button
            },
             {
            Image: Red11,
            name: "iphone 11",
            Desc: "Product Red",
            Price: "$ 619.99",
            Cart: Button
            },
             {
            Image: White11,
            name: "iphone 11",
            Desc: "Mily White",
            Price: "$ 619.99",
            Cart: Button
            },
            {
            Image: Red11,
            name: "iphone 13",
            Desc: "Product Red",
            Price: "$ 619.99",
            Cart: Button
            },
            {
            Image: Red11,
            name: "iphone 14",
            Desc: "Product Red",
            Price: "$ 619.99",
            Cart: Button
            },
    ]


  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-200'>
      
      
      {Products.map((Product, index) => (
        <div
          key={index}
          className=" w-[705px] h-[397px]"
        >
        
        <Link to='/item/:id/'>
        <img src={Product.Image} alt={Product.name} className="image" />
        </Link>
            
          
          <div className='flex flex-col w-[191px] h-[125px] p-2 items-center gap-2'>
            <p className="name">{Product.name}</p>
            <p className="desc">{Product.Desc}</p>
            <p className='price flex items-center gap-2'>{Product.Price} <img src={Product.Cart} alt={Product.name} className="image" /></p>
            
          </div>
          

          
        </div>
      ))}
    </div>
  )
}

