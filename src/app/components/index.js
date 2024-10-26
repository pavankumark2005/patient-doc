// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex-1"> About Me
        
      </div>
      <div className="flex-1 text-center"> My Doc</div>


      <div className="flex-1 flex justify-end items-center">
        <input 
          type="text" 
          placeholder="Search" 
          className="p-2 rounded-l-md border border-gray-300 text-black"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
