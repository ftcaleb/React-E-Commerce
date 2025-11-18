import React from 'react'
import TinyWatch from "../assets/TinyWatch.png";
import ProductImage from "../assets/Product-Image.png";
import Laptop from "../assets/Laptop.png";
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';




function MainProduct() {
  return (
    <div className='flex bg-gray-200'>
      <Sidebar/>
      <div className='flex-1 justify-center mb-2.5 p-4'>
      {/* Main Product Section */}
<section className="col-span-7 px-4 overflow-y-auto">
<button className="flex items-center gap-2 text-black mb-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.375 5.25L8.625 12L15.375 18.75" stroke="#1A1F16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Back
 </button>


<div className="grid grid-cols-12 gap-6">
{/* Thumbnails */}
<div className="col-span-2  flex-col gap-4">
<div className="w-16 h-16 bg-white rounded-xl flex justify-center items-center mb-4">
  <img src={TinyWatch} alt="image"></img>
</div>
<div className="w-16 h-16 bg-white rounded-xl flex justify-center items-center mb-4">
  <img src={TinyWatch} alt="image" ></img>
</div>
<div className="w-16 h-16 bg-white rounded-xl flex justify-center items-center mb-4">
  <img src={TinyWatch} alt="image"></img>
</div>
</div>


{/* Main Image */}
<div className="col-span-4 flex justify-center items-center">
<div className="w-56 h-72 bg-white rounded-xl">
<img src={ProductImage} alt="image"></img>
</div>
</div>


{/* Product Info */}
<div className="col-span-6">
<h1 className="text-4xl font-bold">Apple Watch</h1>
<p className="text-gray-600 text-xl">Series 5 SE</p>


<div className="flex items-center gap-2 mt-2">
<span>⭐⭐⭐⭐⭐</span>
<p className="text-sm text-gray-600">4.5 / 5</p>
</div>


<p className="text-2xl font-semibold mt-4">$ 529.99</p>


<p className="text-gray-700 mt-4">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus malesuada mattis. Poin in quis lacus, non volutpat, interdum et imperdiet. Dignissim nisl leo in. Sit amet, in lacus, nunc volutpat, interdum et imperdiet. Dignissim nisl leo in. Vitae elementum nunc id.
</p>


<button className="mt-6 bg-black text-white px-6 py-3 rounded-xl flex items-center ml-60 gap-2">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3122 7.94062C21.173 7.80063 21.0075 7.68961 20.8252 7.61398C20.6429 7.53835 20.4474 7.49961 20.25 7.5H17.25V6.75C17.25 5.35761 16.6969 4.02226 15.7123 3.03769C14.7277 2.05312 13.3924 1.5 12 1.5C10.6076 1.5 9.27226 2.05312 8.28769 3.03769C7.30312 4.02226 6.75 5.35761 6.75 6.75V7.5H3.75C3.35218 7.5 2.97064 7.65804 2.68934 7.93934C2.40804 8.22064 2.25 8.60218 2.25 9V19.125C2.25 20.9531 3.79688 22.5 5.625 22.5H18.375C19.2593 22.5003 20.1086 22.1545 20.7413 21.5367C21.0596 21.233 21.3132 20.8679 21.4865 20.4634C21.6599 20.059 21.7495 19.6236 21.75 19.1836V9C21.7506 8.80326 21.7122 8.60834 21.6371 8.42652C21.5619 8.24469 21.4515 8.07955 21.3122 7.94062ZM15 15.75H12.75V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V15.75H9C8.80109 15.75 8.61032 15.671 8.46967 15.5303C8.32902 15.3897 8.25 15.1989 8.25 15C8.25 14.8011 8.32902 14.6103 8.46967 14.4697C8.61032 14.329 8.80109 14.25 9 14.25H11.25V12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12V14.25H15C15.1989 14.25 15.3897 14.329 15.5303 14.4697C15.671 14.6103 15.75 14.8011 15.75 15C15.75 15.1989 15.671 15.3897 15.5303 15.5303C15.3897 15.671 15.1989 15.75 15 15.75ZM15.75 7.5H8.25V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V7.5Z" fill="white"/>
</svg>
Add to Bag
</button>
</div>
</div>


<hr className="my-10 " />


{/* Description */}
<h2 className="text-2xl font-bold mb-4">Description</h2>
<p className="text-gray-700 leading-relaxed">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada purus volutpat vel sed viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus pellentesque sagittis. Felis rhoncus facilisis massa eget purus in purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque sit mattis in egestas neque. Eu porta tempor sodales nisl integer turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor diam quisque suspendisse.
Orci vel ridiculus diam viverra. Libero malesuada orci, quis placerat suscipit augue imperdiet. Et praesent augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam sit viverra enim. Id id placerat eu etiam nulla laoreet.
Dignissim leo fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit risus.
Odio phasellus nibh senectus nec id enim quam sed.Aliquam justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit risus.
Odio phasellus nibh senectus nec id enim. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae fugiat provident necessitatibus repudiandae odio doloribus saepe molestias modi, et quis maiores impedit nesciunt. Praesentium excepturi dicta ipsum consequuntur optio dignissimos.
</p>
</section>


{/* Bag Section */}
<div className="col-span-4 border-l pl-6">







</div>
</div>
<div className="border-l-4 sidebar2 gap-4 p-4 top-[51px] sm:invisible md:visible lg:visible">
        <Sidebar2 />
   </div>
</div>
    
  )
}

export default MainProduct