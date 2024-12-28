import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MessageCircle, Users, Lightbulb, Tv } from 'lucide-react';

const services = [
  {
    title: 'WhatsApp Data Automation',
    description: 'Automate your customer interactions with intelligent WhatsApp solutions that save time and improve engagement.',
    icon: MessageCircle,
  },
  {
    title: 'Quality Lead Generation',
    description: 'Generate and nurture high-quality leads through Meta platforms with our targeted approach.',
    icon: Users,
  },
  {
    title: 'Creative Strategy Development',
    description: 'Develop compelling creative strategies that resonate with your target audience and drive business growth.',
    icon: Lightbulb,
  },
  {
    title: 'TVC Brand Awareness',
    description: 'Create impactful TV commercials that build brand awareness and establish your B2B presence.',
    icon: Tv,
  },
];

const ServiceSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to elevate your business communication and marketing strategy
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto p-3 rounded-full bg-green-100 inline-block mb-4">
                  <service.icon className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
