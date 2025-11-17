import React from "react";
import Red11 from "../assets/Red11.png";
import Black11 from "../assets/Black11.png";
import White11 from "../assets/White11.png";
import Green11 from "../assets/Green11.png";
import AppleWatch from "../assets/AppleWatch.png";

export default function Bag() {
  const items = [
    {
      id: 1,
      title: "Dell XPS 13",
      color: "White",
      desc: "A lightweight premium laptop designed for productivity, featuring a sharp display and ultra-fast performance.",
      img: AppleWatch, // replace when laptop image available
      price: 1799.99,
      qty: 1,
      rating: 4.5,
    },
    {
      id: 2,
      title: "iPhone 11",
      color: "Navy Blue",
      desc: "A fast, reliable smartphone with a powerful camera system and smooth everyday performance.",
      img: BlueImage, // you don’t have a blue one — so pick placeholder
      price: 729.99,
      qty: 3,
      rating: 4.5,
    },
    {
      id: 3,
      title: "iPhone 11",
      color: "Milky White",
      desc: "A beautifully designed device offering excellent battery life and crisp photo quality.",
      img: White11,
      price: 619.99,
      qty: 1,
      rating: 4.5,
    },
  ];

  const total = items.reduce((t, i) => t + i.price * i.qty, 0).toFixed(2);

return (
  <div className="min-h-screen bg-[#eeeeee] flex">
    
    {/* Sidebar */}
    <aside className="w-20 bg-white flex flex-col items-center py-6 border-r border-gray-200 space-y-6">
      
      <div className="w-11 h-11 bg-[#0EB760] rounded-lg flex items-center justify-center shadow-sm"></div>
      <div className="w-11 h-11 rounded-lg flex items-center justify-center hover:bg-gray-100 cursor-pointer">
        <span className="text-xl">≡</span>
      </div>
      <div className="w-11 h-11 rounded-lg flex items-center justify-center hover:bg-gray-100 cursor-pointer">
        <span className="text-xl">🛒</span>
      </div>
      <div className="w-11 h-11 rounded-lg flex items-center justify-center hover:bg-gray-100 cursor-pointer">
        <span className="text-xl">📷</span>
      </div>

    </aside>

    {/* Main content */}
    <main className="flex-1 flex p-10 gap-10">

      {/* LEFT SIDE */}
      <section className="flex-1">
        <h1 className="text-[38px] font-semibold mb-10 text-[#2E2E2E]">
          Check your Bag Items
        </h1>

        <div className="space-y-8">

          {items.map((item) => (
            <div
              key={item.id}
              className="flex bg-white rounded-[20px] px-8 py-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] items-center justify-between"
            >
              
              {/* Product Image */}
              <img
                src={item.img}
                className="w-32 h-32 object-contain"
              />

              {/* Product Content */}
              <div className="flex-1 ml-8">
                <h2 className="text-lg font-semibold text-[#333]">{item.title}</h2>
                <p className="text-gray-500 text-sm">{item.color}</p>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-[#0EB760] text-lg">★★★★★</span>
                  <span className="text-gray-600 text-sm">{item.rating} / 5</span>
                </div>
              </div>

              {/* Price & Counter */}
              <div className="flex flex-col items-end space-y-3">
                <p className="text-lg font-medium text-gray-700">
                  ${item.price.toFixed(2)} × {item.qty}
                </p>
                <div className="flex items-center gap-4">
                  <button className="text-red-600 text-2xl font-bold">−</button>
                  <span className="font-medium text-lg">{item.qty}</span>
                  <button className="text-green-600 text-2xl font-bold">+</button>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Divider */}
      <div className="w-px bg-gray-300 rounded-full"></div>

      {/* RIGHT SIDE */}
      <aside className="w-72 pr-2">
        <h2 className="text-3xl font-semibold text-[#303030] mb-6">Bag</h2>

        <div className="flex flex-wrap gap-4 mb-8">
          {items.map((i) => (
            <div
              key={i.id}
              className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center"
            >
              <img src={i.img} className="w-12 h-12 object-contain" />
            </div>
          ))}
        </div>

        <p className="text-gray-700 mb-6 text-lg">
          Bag Total: <span className="font-semibold">${total}</span>
        </p>

        <button className="bg-black text-white w-full py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900">
          <span>🧾</span> Checkout
        </button>
      </aside>

    </main>
  </div>
);
}