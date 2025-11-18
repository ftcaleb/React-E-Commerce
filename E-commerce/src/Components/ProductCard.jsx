import React from 'react'
import Red11 from '../assets/Red11.png'
import Green11 from '../assets/Green11.png'
import White11 from '../assets/White11.png'
import Black11 from '../assets/Black11.png'
import Watch from '../assets/AppleWatch.png'
import Headsets from '../assets/Headphones.png'
import Button from '../assets/Buttonn.png'
import { FaDollarSign } from "react-icons/fa6";

// Had to import this to allow for routing
import { Link } from "react-router-dom";


export default function Product() {
  // opened array of objects for each card data
    const Products = [
          {
            Image: Watch,
            name: "Apple Watch",
            Desc: "Series 5 SE",
            Price: "$ 529.99",
            Cart: Button,
            shortDesc: "A sleek, lightweight wearable designed for fitness, notifications, and all-day tracking.",
            longDesc: "The Apple Watch Series 5 SE blends health, fitness, and daily convenience into a modern wearable. With its always-on display, accurate heart tracking, and seamless integration with the Apple ecosystem, it brings premium functionality to your wrist. Stay connected, track your goals, monitor your wellness, and enjoy fast, responsive performance through the day. Built with durable materials and water resistance, it's ideal for active lifestyles and everyday use."
        },

        {
            Image: Headsets,
            name: "Sony ZX330BT",
            Desc: "Light Grey",
            Price: "$ 39.99",
            Cart: Button,
            shortDesc: "Lightweight wireless headphones with crisp sound and long-lasting playback.",
            longDesc: "The Sony ZX330BT delivers clean, balanced audio in a lightweight, foldable design ideal for everyday listening. Its Bluetooth connectivity provides wireless freedom, and the long-lasting battery keeps your music going through study sessions, commutes, or gym routines. With cushioned ear pads, reliable build quality, and consistent sound tuning, the ZX330BT offers comfort, durability, and dependable performance without breaking the budget."
        },

        {
            Image: Black11,
            name: "Iphone 11",
            Desc: "Serious Black",
            Price: "$ 619.99",
            Cart: Button,
            shortDesc: "Bold, clean, and powered by Apple’s fast A13 chip with impressive dual-camera clarity.",
            longDesc: "The iPhone 11 Serious Black edition pairs minimalist style with everyday power. Its A13 Bionic chip delivers smooth performance for apps, videos, and gaming, while the dual 12MP wide and ultra-wide cameras capture stunning shots in any lighting. The 6.1-inch Liquid Retina display brings vibrant colors and crisp detail, and the durable glass design adds water and dust resistance for daily reliability. A tough, modern classic built to last."
        },

        {
            Image: Green11,
            name: "Iphone 11",
            Desc: "Subway Blue",
            Price: "$ 619.99",
            Cart: Button,
            shortDesc: "A stylish blue finish wrapped around powerful performance and excellent camera quality.",
            longDesc: "The iPhone 11 Subway Blue stands out with its bold color and dependable Apple engineering. Equipped with the A13 Bionic chip, it handles multitasking, streaming, and gaming with ease. The dual-camera system delivers detailed photos and stable 4K video recording. Its Liquid Retina display offers smooth visuals with true-to-life colors. Tough, vibrant, and built for everyday use, this model blends personality with high-level performance."
        },

        {
            Image: Red11,
            name: "Iphone 11",
            Desc: "Product Red",
            Price: "$ 619.99",
            Cart: Button,
            shortDesc: "A striking red finish with fast performance and dependable all-day battery life.",
            longDesc: "The iPhone 11 Product Red edition offers Apple’s signature blend of performance and style. Featuring the A13 Bionic chip, it ensures fast responsiveness across apps and games. The dual-camera setup captures sharp wide and ultra-wide images, with excellent low-light performance thanks to Night Mode. Its durable, water-resistant design and bold color make it stand out as both a device and a statement."
        },

        {
            Image: White11,
            name: "Iphone 11",
            Desc: "Milky White",
            Price: "$ 619.99",
            Cart: Button,
            shortDesc: "Minimalist, clean, and smooth — a refined take on the iPhone 11 design.",
            longDesc: "The iPhone 11 Milky White edition combines a minimalist aesthetic with Apple’s powerful A13 Bionic processor. Its 6.1-inch Liquid Retina display offers vivid clarity, while the dual-camera system produces sharp, detailed photos with stable handheld videos. Built with durable glass and water resistance, it's a reliable everyday device with a calm, elegant finish perfect for users who prefer a subtle and polished look."
        },

        {
            Image: Red11,
            name: "Iphone 13",
            Desc: "Product Red",
            Price: "$ 619.99",
            Cart: Button,
            shortDesc: "Striking red with enhanced cameras, long battery life, and powerful A15 performance.",
            longDesc: "The iPhone 13 Product Red brings cutting-edge upgrades including sensor-shift stabilization, improved low-light photography, and Apple’s ultra-efficient A15 Bionic chip. Its Super Retina XDR OLED display delivers rich contrast and crisp detail, while the strengthened Ceramic Shield makes it durable for daily use. A stylish, high-performance device built for photography, gaming, and long-form productivity."
        },

        {
            Image: Red11,
            name: "Iphone 14",
            Desc: "Product Red",
            Price: "$ 619.99",
            Cart: Button,
            shortDesc: "Next-gen Apple features with upgraded safety tools and premium camera quality.",
            longDesc: "The iPhone 14 Product Red offers advanced performance with the A15 Bionic chip, brighter screen quality, and improved low-light camera results. Emergency SOS, Crash Detection, and efficient battery management introduce new layers of safety for everyday life. Its strong glass and aluminum body deliver durability, while the red finish adds bold style. A modern, future-ready experience crafted for reliability and performance."
        },
    ]


  return (
    // Opened a div and used grid to properly place each card in 4 columns and they also span to the next line
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-200'>
      
      {/* Had to map each item instead of coding them individually  */}
      {Products.map((Product, index) => (
        <div
          key={index}
          className=" "
        >
        {/* This is a router Link that links to whichever concatonated image is clicked */}
        <Link to={`/item/${index}`} state={{ product: Product }}>
            <img src={Product.Image} alt={Product.name} className="image" />
        </Link>
            
          {/* Opened a div and set the width and height so these are properly aligned, especially flex-col */}
          <div className='flex flex-col w-[191px] h-[125px] p-2 items-center gap-2'>
            <p className="name">{Product.name}</p>
            <p className="desc">{Product.Desc}</p>
            
            {/* added the image directly inside the p tag and properly aligned them to fit on the same line */}
            <p className='price flex items-center gap-2'>{Product.Price} <img src={Product.Cart} alt={Product.name} className="image" /></p>
            
            
          </div>
          

          
        </div>
      ))}
    </div>
  )
}