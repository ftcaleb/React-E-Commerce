import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Gbag from '../assets/ContactGbag.svg'

export default function AddAddress() {
  return (
    <div className="isolate flex justify-center bg-gray-200 px-6 py-24 sm:py-32 lg:px-8">
      
      <div className='contact bg-white'>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label  className="block text-sm/6 font-semibold text-label text-Scolor">
              Shipping Name
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                placeholder="John Maker"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label  className="block text-sm/6 font-semibold text-label text-Scolor">
              Street Name
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                placeholder="123 Plae Grond Street"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label  className="block text-sm/6 font-semibold text-label text-Scolor">
              City
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Vermont"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-label text-Scolor">
              State/Province
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="California"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label  className="block text-sm/6 font-semibold text-label text-Scolor">
              Country
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                placeholder="United States of America"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          
          
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                />
              </div>
            </div>
            <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600">
             Save this as your default address
              
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full  bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Address
          </button>
        </div>
        <div className='flex mt-[30px]'>
            <div className='text-label flex justify-start underline text-Scolor'>Back</div>
            <div className='flex justify-end ml-90 contact-secure '><img src={Gbag} alt="" />Secure Connection</div>
        </div>
      </form>
      </div>
    </div>
  )
}