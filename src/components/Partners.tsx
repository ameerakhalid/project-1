import React from 'react';
import { Building2 } from 'lucide-react';

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Join hundreds of companies that trust us with their corporate travel needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-navy-400" />
              <span className="text-lg font-semibold text-navy-400">Company {i + 1}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                Ready to Optimize Your Corporate Travel?
              </h3>
              <p className="text-lg text-navy-600 mb-6">
                Join our partner network and access premium travel management solutions tailored for your business.
              </p>
              <button className="bg-navy-800 text-white px-6 py-3 rounded-lg hover:bg-navy-900 transition">
                Become a Partner
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Office meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}