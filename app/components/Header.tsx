import React from "react";

export default function Header() {
  return (
    <header className="sticky z-20 bg-purple-800 top-0  shadow-sm border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="https://infringementportalcontent.mfilterit.com/images/media/logos/mfilterit-white-logo.png" alt="logo" className="w-full h-7" />
            {/* <h1 className="text-xl font-semibold text-gray-900">MScanIt Dashboard</h1> */}
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Settings
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
} 