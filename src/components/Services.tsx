import React from 'react';
import { Briefcase, Clock, CreditCard, Users, Shield, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Corporate Travel Management",
      description: "End-to-end travel management solutions tailored for businesses"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Expense Management",
      description: "Streamlined billing and expense tracking solutions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Group Booking",
      description: "Efficient handling of large group travel arrangements"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management",
      description: "Comprehensive travel risk assessment and management"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Dedicated Account Manager",
      description: "Personal support for your business travel needs"
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Comprehensive Travel Solutions
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            We provide end-to-end business travel management services designed to optimize your corporate travel program
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-primary-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">{service.title}</h3>
              <p className="text-navy-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}