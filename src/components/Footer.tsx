import React from 'react';
import { Building2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold text-white">FlyHigh</span>
            </div>
            <p className="text-navy-300 mb-6">
              Transforming corporate travel management with innovative B2B solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-navy-400 hover:text-primary-400 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-navy-400 hover:text-primary-400 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-navy-400 hover:text-primary-400 transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">Corporate Travel</a></li>
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">Group Bookings</a></li>
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">Expense Management</a></li>
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">Risk Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">About Us</a></li>
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">Careers</a></li>
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">Partners</a></li>
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">Help Center</a></li>
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">Contact Us</a></li>
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-navy-300 hover:text-primary-400 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-800 mt-12 pt-8 text-center">
          <p className="text-navy-400">
            © {new Date().getFullYear()} FlyHigh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}