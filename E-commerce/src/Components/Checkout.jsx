import React from "react"
import { Star, Minus, Plus, ChevronLeft } from "lucide-react"
import Laptop from "../assets/Laptop.png"
import iPhone13 from "../assets/IPhone13.png"
import iPhone11w from "../assets/iPhone11w.png"
import iPhone11 from "../assets/iPhone11.png"
import { Link } from "react-router-dom"

export default function CheckoutPage() {
  const items = [
    {
      id: 1,
      name: "Dell XPS 13",
      color: "White",
      price: 1799.99,
      quantity: 1,
      rating: 4.5,
      image: Laptop,
    },
    {
      id: 2,
      name: "iPhone 13",
      color: "Space Black",
      price: 1199.99,
      quantity: 1,
      rating: 4.8,
      image: iPhone13,
    },
    {
      id: 3,
      name: "iPhone 11",
      color: "Silver",
      price: 249.99,
      quantity: 2,
      rating: 4.6,
      image: iPhone11w,
    },
    {
      id: 4,
      name: "iPhone 11",
      color: "White",
      price: 399.99,
      quantity: 1,
      rating: 4.7,
      image: iPhone11,
    },
  ]

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 6.99
  const gst = subtotal * 0.13
  const giftCard = 0
  const total = subtotal + shipping + gst - giftCard

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-8 lg:grid-cols-3">
        
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">

          <div className="bg-white p-6 rounded-md shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Shipping Address</h2>
              <Link to='/add-address'>
              <button className="text-sm px-3 py-1 border rounded hover:bg-gray-50">
                Change
              </button>
              </Link>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p>Jack Brabham</p>
              <p>42 Romangna Drive</p>
              <p>Siena, Sl</p>
              <p>Italy</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Payment Method</h2>
              <Link to='/add-payment'>
              <button className="text-sm px-3 py-1 border rounded hover:bg-gray-50">
                Change
              </button>
              </Link>
            </div>

            <div className="text-sm space-y-2">
              <p className="flex items-center gap-2">💳 Mastercard ending 1252</p>
              <p className="flex items-center gap-2">🎁 Gift card balance: $53.21</p>
              <p className="flex items-center gap-2 text-teal-600">
                ✓ Billing address matches shipping
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Your Items</h2>

            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={item.id}>
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded object-cover bg-gray-100"
                    />

                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.color}</p>

                      <div className="flex items-center gap-1 mt-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            size={16}
                            className={
                              j < Math.floor(item.rating)
                                ? "text-teal-500 fill-teal-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                        <span className="text-xs ml-2 text-gray-600">
                          {item.rating.toFixed(1)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span className="font-medium">
                          ${item.price.toFixed(2)} × {item.quantity}
                        </span>

                        <div className="flex items-center gap-3">
                          <button className="text-gray-400 hover:text-gray-600">
                            <Minus size={18} />
                          </button>
                          <span className="text-sm">{item.quantity}</span>
                          <button className="text-teal-500 hover:text-teal-600">
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {i < items.length - 1 && (
                    <div className="border-t mt-6 border-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white p-6 rounded-md shadow-sm sticky top-8">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="text-sm space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Items:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Estimated GST:</span>
                <span>${gst.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="text-xl font-bold text-red-500">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <Link to='/order-success'>  
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 mb-3">
              Place Order
            </button>
            </Link>
            
          </div>
          <div className=" fixed">
            <Link to='/bag'>
          <button className="checkout  ml-60 mt-10 py-2 border rounded flex items-center justify-center gap-2 hover:bg-gray-50 text-sm">
              <ChevronLeft size={16} />
              Back
            </button>
            </Link>
            </div>
          
        </div>
      </div>
    </div>
  )
}
