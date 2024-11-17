import React from 'react';
import { Building2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-navy-600" />
            <span className="ml-2 text-xl font-bold text-navy-900">FlyHigh</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-navy-700 hover:text-primary-600 transition">Solutions</a>
            <a href="#services" className="text-navy-700 hover:text-primary-600 transition">Services</a>
            <a href="#partners" className="text-navy-700 hover:text-primary-600 transition">Partners</a>
            <a href="#contact" className="text-navy-700 hover:text-primary-600 transition">Contact</a>
            <button className="bg-navy-800 text-white px-4 py-2 rounded-lg hover:bg-navy-900 transition">
              Book Demo
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#solutions" className="block px-3 py-2 text-navy-700 hover:bg-navy-50 rounded-md">Solutions</a>
            <a href="#services" className="block px-3 py-2 text-navy-700 hover:bg-navy-50 rounded-md">Services</a>
            <a href="#partners" className="block px-3 py-2 text-navy-700 hover:bg-navy-50 rounded-md">Partners</a>
            <a href="#contact" className="block px-3 py-2 text-navy-700 hover:bg-navy-50 rounded-md">Contact</a>
            <button className="w-full text-left px-3 py-2 bg-navy-800 text-white rounded-md hover:bg-navy-900">
              Book Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}