import React from 'react';

export default function Navbar() {
    return(
        //Search item bar
        <div className='gap-4 py-8 px-8  items-center mb-15 w-[475px] h-6'>
            <p className='text-Scolor left-2 gap-2.5 right-2 text-[16px]'>
                Search Item
            </p>
            
            <input className='Search text-rgba(26, 31, 22, 0.5) bg-white' 
            type='text' 
            placeholder='Apple Watch, Samsung S21, Macbook Pro, ...' />
        </div>
    );
}