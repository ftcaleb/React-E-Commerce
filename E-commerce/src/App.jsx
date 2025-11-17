import React from "react";
import Home from "./Pages/Home";
import Search from "./Components/Search";
import Sidebar from "./Components/Sidebar";
import Bag from "./Components/Bag";

function App() {
  return (
    <div className="flex bg-gray-200">
      <Sidebar />
      <div className="flex-1 justify-center p-4">
        <Search />
        <div className="">
          <Home />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bag" element={<Bag />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
