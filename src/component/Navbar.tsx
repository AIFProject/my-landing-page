import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-green-500">Abyan</div>
          <div className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-500">Home</a>
            <a href="#about" className="text-gray-700 hover:text-green-500">About</a>
            <a href="#project" className="text-gray-700 hover:text-green-500">Project</a>
            <a href="#contact" className="text-gray-700 hover:text-green-500">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
