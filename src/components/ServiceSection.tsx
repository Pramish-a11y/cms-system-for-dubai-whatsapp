import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MessageCircle, Users, Lightbulb, Tv, Check } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: 'WhatsApp Data Automation',
    description: 'Streamline your business operations with intelligent WhatsApp automation that handles customer inquiries, appointment bookings, and follow-ups automatically.',
    icon: MessageCircle,
    features: [
      '24/7 Automated Responses',
      'Smart Lead Qualification',
      'Appointment Scheduling',
      'Custom Workflow Integration'
    ],
    imagePath: '/images/whatsapp-automation.png'
  },
  {
    title: 'Meta Lead Generation',
    description: 'Generate high-quality leads through targeted Meta platforms campaigns that connect with your ideal B2B audience.',
    icon: Users,
    features: [
      'Advanced Audience Targeting',
      'Lead Scoring System',
      'Campaign Analytics',
      'ROI Optimization'
    ],
    imagePath: '/images/lead-generation.png'
  },
  {
    title: 'Creative Strategy',
    description: 'Develop compelling creative strategies that differentiate your brand and drive meaningful engagement with your target audience.',
    icon: Lightbulb,
    features: [
      'Brand Story Development',
      'Content Strategy',
      'Market Research',
      'Competitor Analysis'
    ],
    imagePath: '/images/creative-strategy.png'
  },
  {
    title: 'TVC Brand Awareness',
    description: 'Create impactful television commercials that build brand awareness and establish your B2B presence in the Dubai market.',
    icon: Tv,
    features: [
      'Professional Production',
      'Strategic Placement',
      'Message Optimization',
      'Performance Tracking'
    ],
    imagePath: '/images/tvc-production.png'
  },
];

const ServiceSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive B2B Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business communication and marketing strategy with our
            integrated services tailored for the Dubai market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image
                    src={`/api/placeholder/400/300`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-3/5">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-green-100">
                        <service.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
