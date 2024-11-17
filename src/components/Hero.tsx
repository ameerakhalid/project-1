import React from 'react';
import { ArrowRight, Building2, Shield, Globe2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your Corporate Travel Management
            </h1>
            <p className="text-xl text-navy-100">
              Streamline your business travel operations with our comprehensive B2B travel solutions.
              Built for enterprises, trusted by industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-6 py-3 bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition font-semibold">
                Schedule Demo <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-semibold">
                Partner With Us
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-xl">
              <Building2 className="h-8 w-8 text-primary-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Corporate Solutions</h3>
              <p className="text-navy-100">Tailored travel management for businesses of all sizes</p>
            </div>
            <div className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-xl">
              <Shield className="h-8 w-8 text-primary-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure Booking</h3>
              <p className="text-navy-100">Enterprise-grade security for all transactions</p>
            </div>
            <div className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-xl">
              <Globe2 className="h-8 w-8 text-primary-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Global Network</h3>
              <p className="text-navy-100">Access to worldwide travel inventory</p>
            </div>
            <div className="bg-gradient-to-br from-primary-400 to-primary-500 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-2">98%</h3>
              <p className="text-white">Client satisfaction rate across our enterprise solutions</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
}