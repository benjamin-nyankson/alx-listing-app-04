import React from "react";

const accommodations = ["Rooms", "Mansion", "Countryside", "Apartment", "Villa"];

const Header: React.FC = () => {
  return (
    <header className="w-full bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">🏡 ListingApp</div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-4">
          {accommodations.map((type) => (
            <button
              key={type}
              className="hover:bg-blue-500 px-3 py-1 rounded transition"
            >
              {type}
            </button>
          ))}
        </nav>

        {/* Search bar */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search properties..."
            className="px-3 py-1 rounded text-black w-48 md:w-64"
          />
          <button className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 transition">
            Search
          </button>
        </div>

        {/* Auth buttons */}
        <div className="flex gap-2">
          <button className="border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-600 transition">
            Sign In
          </button>
          <button className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
