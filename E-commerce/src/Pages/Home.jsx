import Search from '../Components/Search'
import Sidebar from '../Components/Sidebar'
import Sidebar2 from '../Components/Sidebar2'
import ProductCard from '../Components/ProductCard'

export default function Home() {
  return (
    // Opened a div with flex 
    <div className='flex bg-gray-200'>
      <Sidebar />

      {/* opened a div and said flex-1 to push it from the sidebar */}
      <div className='flex-1 justify-center mb-2.5 p-4'>
        {/* opened a div for the search component to place it correctly over the productcard compoenent */}
        <div className='flex justify-center'>
          <Search />
        </div>
       {/* put the product card in the middle */}
        <div>
          <ProductCard />
        </div>
      </div>
      {/* and opened a div for the second sidebar and pushed it to the left */}
      <div className="border-l-4 sidebar2 gap-4 p-4 top-[51px] sm:invisible md:visible lg:visible">
        <Sidebar2 />
      </div>
    </div>
  )
}
