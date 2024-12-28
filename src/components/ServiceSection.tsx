import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar, Home, MessageCircle, Clock, Users, Building } from 'lucide-react';
import Image from 'next/image';

const industries = [
  {
    title: 'For Dental Clinics',
    description: 'Streamline patient bookings and follow-ups with automated WhatsApp communications.',
    icon: Calendar,
    features: [
      'Automated appointment reminders',
      'Patient feedback collection',
      'Treatment follow-ups',
      '24/7 booking system'
    ],
    benefits: '40% increase in booking rates',
    imagePath: '/api/placeholder/400/300'
  },
  {
    title: 'For Real Estate',
    description: 'Handle property inquiries and viewings efficiently with smart automation.',
    icon: Home,
    features: [
      'Automated property details',
      'Viewing scheduler',
      'Lead qualification',
      'Instant response system'
    ],
    benefits: '50% faster response time',
    imagePath: '/api/placeholder/400/300'
  }
];

const features = [
  {
    title: 'Instant Response',
    description: 'Never miss an inquiry with 24/7 automated responses',
    icon: MessageCircle
  },
  {
    title: 'Smart Scheduling',
    description: 'Automated booking system with calendar integration',
    icon: Clock
  },
  {
    title: 'Lead Management',
    description: 'Qualify and nurture leads automatically',
    icon: Users
  },
  {
    title: 'Business Integration',
    description: 'Seamless integration with your existing systems',
    icon: Building
  }
];

const ServiceSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Industry Solutions */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored WhatsApp automation for Dubai's dental and real estate sectors
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industries.map((industry, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image
                    src={industry.imagePath}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-3/5">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-green-100">
                        <industry.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle>{industry.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{industry.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-medium">
                        Result: {industry.benefits}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-green-100 inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
